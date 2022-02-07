/*

    blockID = ID of the needed block
    pathToImagesDirectory = path to the directory where the images are stored
    numberOfWallpapers = number of the images in the selected directory.
        ATTENTION! The images names must be 1.jpg, 2.jpg... and so on to get the script working properly.
    adaptiveBreakPoint = value of the breakpoint after which the backgrounds will be shown (just a value without px or any other units)

    Syntax for the HTML template:

    <script src="[PATH TO THIS SCRIPT]/background.js"></script>
    <script>
        MakeBG('t-background-wrapper', 'backgrounds', '4', 800);
        MakeBG('debug', 'backgrounds', '4', 800);
    </script>

*/


function MakeBG(blockID, pathToImagesDirectory, numberOfWallpapers, adaptiveBreakPoint ) {

    this.blockID = blockID.toString();
    this.pathToImagesDirectory = pathToImagesDirectory.toString();
    this.numberOfWallpapers = parseInt(numberOfWallpapers);
    this.adaptiveBreakPoint = parseInt(adaptiveBreakPoint);

    this.getRandomInt = function () {
        return Math.floor(Math.random() * (this.numberOfWallpapers)) + 1;
    };

    if (document.documentElement.clientWidth > this.adaptiveBreakPoint){
        document.getElementById(this.blockID).style.backgroundImage = 'url("' + this.pathToImagesDirectory + '/' + this.getRandomInt() + '.jpg")';
    }

}






