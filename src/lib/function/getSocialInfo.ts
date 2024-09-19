import axios from 'axios';
import * as cheerio from 'cheerio';



async function getInsta(user: string) {
    const res = await axios.get('https://www.instagram.com/' + user)

    const html = res.data

    const $ = cheerio.load(html);

    const username = $('meta[property="og:title"]').attr('content')?.split(' ')[0] ?? '';
    const nickname = $('meta[property="og:title"]').attr('content')?.split(' (')[0] ?? '';
    const followers = $('meta[name="description"]').attr('content')?.match(/(\d+(?:,\d+)*) Followers/)?.[1] ?? '';
    const following = $('meta[name="description"]').attr('content')?.match(/(\d+(?:,\d+)*) Following/)?.[1] ?? '';
    let avatar = '';
    const match = html.match(/"profile_pic_url":"([^"]+)"/);
    if (match) {
        avatar = JSON.parse(`"${match[1]}"`);
    }

    return { username, nickname, followers, following, avatar };
}

async function getTiktok(user: string) {
    const res = await axios.get('https://www.tiktok.com/@' + user)

    const html = res.data

    let username = '';
    let nickname = '';
    let avatar = '';
    let followers = '';
    let following = '';
    let likes = '';

    const avatarMatch = html.match(/"avatarMedium":"([^"]+)"/);
    if (avatarMatch) {
        avatar = JSON.parse(`"${avatarMatch[1]}"`);
    }

    const nicknameMatch = html.match(/"nickname":"([^"]+)"/);
    if (nicknameMatch) {
        nickname = JSON.parse(`"${nicknameMatch[1]}"`);
    }

    const followersMatch = html.match(/"followerCount":(\d+),/);
    if (followersMatch) {
        followers = JSON.parse(`"${followersMatch[1]}"`);
    }

    const followingMatch = html.match(/"followingCount":(\d+),/);
    if (followingMatch) {
        following = JSON.parse(`"${followingMatch[1]}"`);
    }

    const likesMatch = html.match(/"heartCount":(\d+),/);
    if (likesMatch) {
        likes = JSON.parse(`"${likesMatch[1]}"`);
    }

    const usernameMatch = html.match(/"uniqueId":"([^"]+)"/);
    if (usernameMatch) {
        username = JSON.parse(`"${usernameMatch[1]}"`);
    }

    return { avatar, followers, following, likes, nickname, username }
}

async function getGithub(user: string) {
    const res = await axios.get('https://github.com/' + user)

    const html = res.data

    const followersMatch = html.match(/<span class="text-bold color-fg-default">(\d+)<\/span>\s*followers/);
    const followingMatch = html.match(/<span class="text-bold color-fg-default">(\d+)<\/span>\s*following/);
    const bioMatch = html.match(/data-bio-text="([^"]+)"/);
    const nameMatch = html.match(/<span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">\s*(.*?)\s*<\/span>/);
    const usernameMatch = html.match(/<span class="p-nickname vcard-username d-block" itemprop="additionalName">\s*(.*?)\s*<\/span>/);
    
    const bio = bioMatch ? bioMatch[1] : null;
    const nickname = nameMatch ? nameMatch[1].trim() : null;
    const username = usernameMatch ? usernameMatch[1].trim() : null;
    const followers = followersMatch ? followersMatch[1] : null;
    const following = followingMatch ? followingMatch[1] : null;

    return { nickname, username, bio, followers, following }
}

export { getInsta, getTiktok, getGithub }