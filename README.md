The floating help button is a **draggable** button that is _beyond easy_ to add to your page and works perfectly as a floating action button for messaging, customer support, and more. Works great on your material design page. You can also turn of the drag ability.

## Getting Started

```bash
git clone https://github.com/mfix22/floating_help_button.git
```

Link the css and js files to your page
```html
<link rel="stylesheet" href="css/help.css">
...
<script src="js/help.js"></script>
<!--JQuery-->
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>');</script>
```

## Usage
Add a div with a `.help.inactive` class to your page. Add `id="help"` if you want your button to be draggable
```html
<div class="help inactive"  id="help">
```

That is all you need! However there are a few things you can do to customize your floating help button

Within the `.help.inactive` div, add a `<p class="help-text"></p>` with text or an icon that will be displayed before the button is pressed. 

Within the `.help.inactive` div, ad a `<div class="helpbox"></div>` with the elements you want hidden until the button has been pressed

Basic form example:
```html
<div class="help inactive"  id="help">
    <p class="help-text">?</p>
    
    <div class="helpbox">
        <i class="icon ion-close-round x"></i>
        <div class="help-form">
            <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email" required>
            </div>
            <textarea class="form-control" rows="5" id="message" placeholder="Message" required></textarea>
            <button type="submit" id="help-submit" class="btn  btn-lg btn-block">SEND</button>
        </div>
            
    </div>
</div>
```

## Options
You can customize the position, colors, and more by passing the options as so: 
```js
var options = {
    draggable : false,
    top: '50%',
    left: '50%',
    send: function(){
        alert("Hello");
    },
    color: "blue",
    background_color: "salmon"
};
set(options);
```


Make sure to place this script **after** your link to `help.js`.

### Option information
 Name          | Type        | Default     | Description 
 ------------- | ----------- | ----------- | ----------- 
 draggable     | boolean     | _true_      | Sets whether you want the button to be draggable or not
 top           | string      | _90%_       | Sets position of button from top
 left          | string      | _90%_       | Sets position of button from top
 send          | function    | _null_      | This function is called by the button with id `#help-submit`
 color         | string      | _#3B70BF_   | Used to color features of the help button
 background_color| string    | _white_   | Used as the background color of the help button

##Example
```html
<head>
	<link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet"/>
</head>
<body>
	<div class="help inactive"  id="help">
		<!--Elements with class 'x' will close the help button-->
	    <i class="icon ion-close-round x"></i> 
	    <!--Elements within 'help-form' will be hidden until the button is clicked-->
	    <div class="help-form">
	        <div class="form-group">
	            <input type="email" class="form-control" id="email" placeholder="Email" required>
	        </div>
	        <textarea class="form-control" rows="5" id="message" placeholder="Message" required></textarea>
	        <!--Funtion 'send' passed in with options is called when this button is clicked-->
	        <button type="submit" id="help-submit" class="btn  btn-lg btn-block">SEND</button>
	    </div>
	</div>
	
	...

	<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>');</script>
	<script src="js/help.js"></script>
	<script>
		var options = {
	        draggable : false,
	        top: '50%',
	        left: '50%',
	        send: function(){
	            alert("Hello");
	        },
	        color: "blue",
	        background_color: "salmon"
	    };
	    set(options);
	</script>
</body>
```


I created the form seen in the example `index.html` thanks to [Bootstrap](http://getbootstrap.com/) and [Ionicons](http://ionicons.com/) if you want to recreate this example!:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet"/>
```

## Coming Soon
- Bower install
- Live dragging (with move cursor)
- Ability to have multiple floating help buttons on a page (and no need for `id="help"`)

---

[MIT License](https://github.com/mfix22/floating_help_button/blob/master/LICENSE)

