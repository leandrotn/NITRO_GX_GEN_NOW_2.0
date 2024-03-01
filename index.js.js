const fs = require('fs');
const axios = require('axios');
console.log('▒██░░░░▐█▀▀░░▄█▀▄─▒██▄░▒█▌░▐█▀█▄▒▐█▀▀▄▒▐█▀▀█▌▒█▀█▀█▒██▄░▒█▌');
console.log('▒██░░░░▐█▀▀░▐█▄▄▐█▒▐█▒█▒█░░▐█▌▐█▒▐█▒▐█▒▐█▄▒█▌░░▒█░░▒▐█▒█▒█░');
console.log('▒██▄▄█░▐█▄▄░▐█─░▐█▒██░▒██▌░▐█▄█▀▒▐█▀▄▄▒▐██▄█▌░▒▄█▄░▒██░▒██▌');
console.log('NITRO GEN PROMOCIONAL MENSAL VERSÃO 2.0!!');
console.log('discord.gg/tncorporation');
let linkCount = 0;

const generateAndSendLinks = async () => {
  try {
    const links = [];

    for (let i = 0; i < 10; i++) {
      const response1 = await axios.get('https://api.gx.me/profile/token', {
        headers: {
          'Authority': 'api.gx.me',
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cookie': `SESSION_TYPE=user; SESSION=N2FlNTg4NzItNzY5NC00NjFjLWE1YTEtZTI4MWNjNzFiMjE0`,
          'Origin': 'https://www.opera.com',
          'Referer': 'https://www.opera.com/',
          'Sec-Ch-Ua': '^^Not',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '^^Windows^^\"\"',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/107.0.0.0'
        }
      });

      const autorizar = response1.data.data;

      const response2 = await axios.post('https://discord.opr.gg/v2/direct-fulfillment', null, {
        headers: {
          'Authority': 'discord.opr.gg',
          'Accept': '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Authorization': autorizar,
          'Content-Length': '0',
          'Origin': 'https://www.opera.com',
          'Referer': 'https://www.opera.com/',
          'Sec-Ch-Ua': '^^Not',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '^^Windows^^\"\"',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/107.0.0.0'
        }
      });

      const tokenFromResponse = response2.data.token;
      const url = `https://discord.com/billing/partner-promotions/1180231712274387115/${tokenFromResponse}`;
      links.push(url);
    }

    for (let i = 0; i < links.length; i += 5) {
      const linksBatch = links.slice(i, i + 5);
      const fileName = `links_batch_${linkCount}.txt`;
      fs.writeFileSync(fileName, linksBatch.join('\n'));
      console.log(`Links salvos em ${fileName}`);
    }

    linkCount += 1;

    setTimeout(generateAndSendLinks, 3600000);
  } catch (error) {
    console.error('Erro:', error);
  }
};

generateAndSendLinks();
