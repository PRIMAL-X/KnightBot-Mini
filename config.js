/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VUW5OiOBj9L3nVGpCrWtVVC4iKNN7ABntrHiIJGAkXQ1Bxyv++Rff09DzsTvXyFJLUyfnOOd/3AxQlqbGLWzD+ASpGLpDjbsnbCoMxMJskwQz0AYIcgjEQp43vX3OIp+WoRfKuvWRGxXaBnASLkyj1SsVMYlTGFzt+Ao8+qJoDJfEfAG/2okwETwvr0b66ayj0qRdd11kRBsvJ83RGp8YgH6LpXnSewKNDhISRIrWrI84xg9TF7RoS9jX6/tRo2wCGNZLVfCghy/JX0XCRQfNsZcKrcpJCwVmf8DnzvkY/15aOMEovd3ZSLybtMevFGQhR+cL5vsCLsgfXQmyKu+HUfqdfk7TAyEG44IS3X9Z9uJgvdPWYbmmdnoNedrrxhC4ulYgaOye+fxa3awE6RzxwvkZ8rlyt5znbt2SaDpZ5GgUO9l9XUrk4SLHEN+pxJLG9ULxsvN+Jr9lHVrL/o7tl6pB5mzjMJNOhz0liL/NtnNFRYZ13zeG02s9EIdWPkm1/jT4LkSb2YiXH83DYu61fiLgMtHutbfXmHtUtsQ/PobuIz3L6SR/yhv2JJa16p8niZmXMgBv/fntp6GrbruPTvZ5eL6jepbGliioh1kGsLtwaHmnBXpXE5mlm8xk1V8EkMosSwqtJRqYVzNSbsXl6qyjDrYPAePDoA4ZTUnMGOSmLbm8o9gFEFx/HDPM3dUECE7UKbGWjnXWaNbJydLftVZfXJFs6DaK3NKdp+2IcWuUJ9EHFyhjXNUZzUvOStR6ua5jiGoz//t4HBb7xd9+61+RBHySE1XxXNBUtIfow9eMQxnHZFNxvi9jqFpiBsfi5jTknRVp3MjYFZPGRXLB1hLwG4wTSGv8qEDOMwJizBv9qWqtEne66bUxl2zVBH+RvfhAExkCSlaGoqqomy7I4lqS/6m/XDhdW1bcCc9AH9Oc9Xes+SZMGkq51N7uDxy+KHSLCHBJad9Fz5i5dZpbtWCpBxmxm2KlhpQb4LOkjGu/an7V5cQ128a1k2rraPA/4dbIrqZIsX/1INb3Sobe7UB6lmfj0LyBgDA6rVBBW7sqMwio28UFIpEqe9JaDYOK0u3mjXP1D5Pi3SNvkyX60ztukaMrlPIqgYsHtOtyl+j0OR0qi44lnICZVxOxy1AcIX0iMf39sW6LTK79PjZ2p7NW9GtGprkhVOvEMm2WbTMXu5IJFlU080ZXciBko80ghRdy7V8LIvY2Cm26GYUQ0uqiz1hpVQ+P6Htq3pqE/hxV5y1NnVvebEPzW+wXsLPyCee/Mu5CJj/5vID/HyX+0pAmbozq0B3MPur2TtrNGh9gYuAs8v4c72tsErrWIY0Fz0JGDx+N7H1QU8qRkORgDWCBWEgT6gJVNl1qnSMo/TSnDc6xNanWlU1hz47MTApLjmsO8AuOBrg9VeaSpyuMfMtw5ST4HAAA=
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*', process.env.SESSION_ID || 
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
