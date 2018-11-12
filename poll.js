```javascript
  if(command === "poll") {
  if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
    return message.reply("ERROR: you don't have permissions to use this!");
  if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 100000}));
  
  const embed = new Discord.RichEmbed()
    .setTitle(args.join(' '))
   .setDescription(`:DHYes: Yes | :DHexclamation: Maybe | :DHNo: No`)
    .setFooter('React to vote on Poll!')
    .setColor('#7289DA')
    const pollTitle = await message.channel.send({ embed });
      await pollTitle.react(`477742518197551104`);
      await pollTitle.react (`480579983375466517`);
      await pollTitle.react(`477742275003416576`);
  
    const filter = (reaction) => reaction.emoji.name === '477742518197551104';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  
    const filter1 = (reaction) => reaction.emoji.name === '477742275003416576';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
  
};```
