Webpage
need to upload an image - video or picture
need to call imageuploadserv. imageuploadserv will give back a response URL
need to all someotherserv passing the image URL to insert/update the image in the DB


Create a simple UI which calls the above services to upload the images
Show me the demo of the webpage with the uploaded image working

Make sure the image will fit the screen for iOS, Android and Web.

/// front end part

class UploadComponent extends React.Components {

    uploadImage(e){
    // url, options
     //lets send the image here with fetch or somethiong else
     e.prevendDefault()
     const formData = new FormData()
     formData.append('file', e.target.files[0])
        fetch('http://localhost:8080', {method: 'POST', body: formData}).then(resp => {
            alert('everthing is ok')
        }).catch(err => {
           alert('there is something wrong')
        })

    }

    render(){
        <body>
            <form >
                <input ref="image" type="file" onChange={this.uploadImage.bind(this)}/>
            </form>

        </body>
    }

}



/// here we will code the server part with nodejs

var http = require('http')
var mongose = require('mongoose')
var express = require('express')
var fs = require('fs')

mongose.connect('mongodb://localhost/images')
var schema = new Schema (img : {data: Buffer, contenttype: String })

var Img = mongose.model('Img', schema)

uploadImage(){

// here we will create our db con and we will updload the image
// return success or error
    mogose.save()

}

app.post('api/image', function(request, response){
    var newItem = new Img()
    newItem.img.data = fs.readFileSync(request.files.dir)
    newitem.img.contentType = 'image/jpg'
    newItem.save()
})

http.createServer(funciton(resquest, response){
    uplodadImage(resquest)
    response.end({status: 201})
})

// user the first argument of the console or 8080 by default
server.listen(process.arg[2] || 8080)
