<script lang="ts">
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Icon from '@iconify/svelte';
  import Fragment from '../components/Fragment.svelte';

  interface SocialData {
    avatar?: string;
    followers?: string | number;
    following?: string | number;
    likes?: string | number;
    nickname?: string;
    username?: string;
    bio?: string;
  }

  let socialData: Record<string, SocialData> = {
    instagram: {} as SocialData,
    tiktok: {} as SocialData,
    github: {} as SocialData
  };

  onMount(async () => {
    try {
      const [instagramData, tiktokData, githubData] = await Promise.all([
        axios.get('/api/social/ig?username=ilham.j_08').then(res => res.data),
        axios.get('/api/social/tt?username=ilham.j_08').then(res => res.data),
        axios.get('/api/social/gh?username=ilhamjaya08').then(res => res.data)
      ]);

      socialData = {
        instagram: instagramData,
        tiktok: tiktokData,
        github: githubData
      };
    } catch (error) {
      console.error('Error fetching social data:', error);
    }
  });

  function handleClick(url: string) {
    window.open(url, '_blank');
  }

  const socialConfig = [
    {
      key: 'instagram',
      icon: 'skill-icons:instagram',
      color: 'text-pink-600 dark:text-pink-400',
      buttonColor: 'bg-[#E1306C] dark:bg-[#F56040]',
      url: (username: string) => `https://www.instagram.com/${username}`
    },
    {
      key: 'tiktok',
      icon: 'skill-icons:tiktok',
      color: 'text-black dark:text-white',
      buttonColor: 'bg-black dark:bg-white dark:text-black',
      url: (username: string) => `https://www.tiktok.com/@${username}`
    },
    {
      key: 'github',
      icon: 'skill-icons:github',
      color: 'text-gray-700 dark:text-gray-300',
      buttonColor: 'bg-[#333] dark:bg-[#f0f6fc] dark:text-[#333]',
      url: (username: string) => `https://github.com/${username}`
    }
  ];
</script>

<article id='contact' class='bg-[#21faa7] dark:bg-[#1a8c5f] py-8'>
  <div class='px-4 mx-auto w-full md:max-w-3xl lg:max-w-4xl'>
    <h1 class="font-suse font-extrabold text-2xl mb-4 text-black dark:text-white">
      <Fragment name="Social & Contacts" />
    </h1>
    
    <div class="space-y-4">
      {#each socialConfig as { key, icon, color, buttonColor, url }}
        <div class="p-3 rounded-md border border-black dark:border-white flex items-center justify-between group hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
          <div class="flex items-center space-x-4">
            {#if socialData[key].avatar}
              <img src={socialData[key].avatar} alt={`${key} avatar`} class="w-12 h-12 rounded-full" />
            {:else}
              <Icon {icon} class='w-12 h-12 {color} grayscale group-hover:grayscale-0 transition-all duration-300' />
            {/if}
            <div>
              <h4 class="text-lg font-bold text-black dark:text-white">{socialData[key].nickname || socialData[key].username}</h4>
              <p class="font-mono text-xs text-gray-600 dark:text-gray-400">@{socialData[key].username}</p>
            </div>
          </div>
          <div class="flex flex-col items-end space-y-2">
            <div class="flex flex-wrap gap-2 justify-end">
              {#if socialData[key].followers !== undefined}
                <div class="badge badge-sm badge-outline text-black dark:text-white">{socialData[key].followers} Followers</div>
              {/if}
              {#if socialData[key].following !== undefined}
                <div class="badge badge-sm badge-outline text-black dark:text-white">{socialData[key].following} Following</div>
              {/if}
              {#if socialData[key].likes !== undefined}
                <div class="badge badge-sm badge-outline text-black dark:text-white">{socialData[key].likes} Likes</div>
              {/if}
            </div>
            {#if socialData[key].bio}
              <p class="text-xs text-gray-700 dark:text-gray-300 text-right">{socialData[key].bio}</p>
            {/if}
            <button
              type="button"
              class="btn btn-sm {buttonColor} text-white group-hover:bg-secondary group-hover:text-secondary-content transition-colors duration-300"
              on:click={() => handleClick(url(socialData[key].username || ''))}
              on:keydown={(e) => e.key === 'Enter' && handleClick(url(socialData[key].username || ''))}
            >
              Connect on {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</article>
