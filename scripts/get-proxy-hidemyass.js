/**
 * Created by Lorenzo on 29/01/2017.
 */
// target : http://proxylist.hidemyass.com

// copypaste in console

var proxies = document.getElementsByTagName("tr");

for(var i = 0; i < proxies.length; i++)
{
    console.log(proxies[i].innerText.split("	")[1] + ":" + proxies[i].innerText.split("	")[2]);
}