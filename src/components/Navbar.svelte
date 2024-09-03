<script>
    import Fragment from "./Fragment.svelte";
    import { CardItem, CardBody, CardContainer } from '../components/ui/ThreeDCardEffect';
    
    let isMouseEntered = false;
</script>

<div class='fixed top-0 left-0 right-0 z-50'>
  <div class='flex justify-center'>
    <div class="navbar bg-base-100 w-full md:max-w-[50%] mt-2 rounded-3xl border border-black">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost" on:click={() => {
            const modal = document.getElementById('navigation_modal');
            if (modal instanceof HTMLDialogElement) {
              modal.showModal();
            }
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div class="flex-1">
          <Fragment name='Ilham'/>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button>
        </div>
    </div>
  </div>
</div>

<dialog id="navigation_modal" class="modal">
  <div class="modal-box">
    <CardContainer bind:isMouseEntered className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
      >
        <CardItem
          {isMouseEntered}
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Navigation
        </CardItem>
        <CardItem
          {isMouseEntered}
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Where would you like to go on this site?
        </CardItem>
        <CardItem {isMouseEntered} translateZ="100" className="w-full mt-4">
          <div class="join join-vertical w-full">
            <button class="btn join-item">Main Page</button>
            <button class="btn join-item">About</button>
            <button class="btn join-item">Blog</button>
            <button class="btn join-item">Contact</button>
            <button class="btn join-item">Support Me</button>
            <button class="btn join-item">Leave a message</button>
            <button class="btn join-item">Site's Source Code❤</button>
          </div>
        </CardItem>
        <div class="mt-20 flex items-center justify-between">
          <CardItem
            {isMouseEntered}
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Press anywhere outside the box <br> to exit or click Esc
          </CardItem>
          <CardItem
            {isMouseEntered}
            translateZ={20}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <button on:click={() => {
              const modal = document.getElementById('navigation_modal');
              if (modal instanceof HTMLDialogElement) {
                modal.close();
              }
            }}>
              Esc
            </button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>