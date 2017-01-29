// target : web.whatsapp.org

// requirements : open the chat where you have the images to download, them must be already downloaded in the chat

// just copypaste in the browser console

var images = document.getElementsByClassName("image-thumb-body");

var filename = "image";

for(var i = 0; i < images.length; i++)
{
    var link = document.createElement("a");
    link.setAttribute("download",filename + (i + 1) + ".jpg");
    link.setAttribute("href",images[i].src);
    document.getElementsByTagName("span")[0].appendChild(link);
}

for(var i = 0; i < images.length; i++)
{
    document.getElementsByTagName("span")[0].getElementsByTagName("a")[i].click();
}