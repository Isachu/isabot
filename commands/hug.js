module.exports = {
    name: 'hug',
    hidden: true,
    execute(msg, args) {
        
      if(msg.member.roles.has(&502544290765864970)
         {
            let num = 414;
         }
         
       else
        {
            let num = Math.floor(Math.random() * 950) + 1;
        }

      if (num == 414) {
        msg.channel.send('wat');
        sendLog(msg.author.tag + ' actually hugged me in ' + msg.guild.name + '!! <@&513807019048828929>');
      }
      sendLog(msg.author.tag + ' failed to hug Isabelle in ' + msg.guild.name + '. ``num`` was ' + num);
    }
};
