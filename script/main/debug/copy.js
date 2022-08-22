var one;
var two;

var sd = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var context = UI.getContext();
var Options = {
	showMessages:true,
	saveTo:"file",
	path:"games/com.mojang",
	name:"Speed Code.txt",
	itemId:341
}; 

function runAsGUI(f)
{
	context.runOnUiThread(new java.lang.Runnable({ run: function(){
			try{
				f();
			}catch(error){
				print(error);
			}
	}}));
}



Callback.addCallback("ItemUse", function(coords, item, block){
	var x = coords.x;
var y = coords.y;
var z = coords.z;
	if(item.id == Options.itemId)
	{
		if(!one)
		{
			one = {x:x,y:y,z:z};
			if(Options.showMessages) Game.message("Set point 1\nX: " + x + "  Y: " + y + "  Z: " + z);
		}else{
			two = {x:x,y:y,z:z};
			if(Options.showMessages) Game.message("Set point 2\nX: " + x + "  Y: " + y + "  Z: " + z);
			if(Options.saveTo == "file") writeToFile();
			else if(Options.saveTo == "clip") writeToClipboard();
			one = null;
			two = null;
		}
	}
});


function writeToFile()
{
	var name = __mod__ + " " + Options.name;
	var folder = java.io.File(sd+"/"+Options.path);
	var file = java.io.File(sd+"/"+Options.path,name);
	
	if(!file.exists())
	{
		folder.mkdirs();
		file.createNewFile();
	}
	var StringToWrite = "";
	
	for(var a = Math.min(one.x,two.x); a <= Math.max(one.x,two.x); a++)
	for(var b = Math.min(one.y,two.y); b <= Math.max(one.y,two.y); b++)
	for(var c = Math.min(one.z,two.z); c <= Math.max(one.z,two.z); c++)
	{
		if(World.getBlockID(a,b,c) == 0) continue;
		if(a-Math.min(one.x,two.x) == 0) sx = "x";
		if(a-Math.min(one.x,two.x) > 0) sx = "x+" + (a-Math.min(one.x,two.x));
		if(a-Math.min(one.x,two.x) < 0) sx = "x-" + (a-Math.min(one.x,two.x));
		
		if(b-Math.min(one.y,two.y) == 0) sy = "y";
		if(b-Math.min(one.y,two.y) > 0) sy = "y+" + (b-Math.min(one.y,two.y));
		if(b-Math.min(one.y,two.y) < 0) sy = "y-" + (b-Math.min(one.y,two.y));
		
		if(c-Math.min(one.z,two.z) == 0) sz = "z";
		if(c-Math.min(one.z,two.z) > 0) sz = "z+" + (c-Math.min(one.z,two.z));
		if(c-Math.min(one.z,two.z) < 0) sz = "z-" + (c-Math.min(one.z,two.z));
		
		if(World.getBlockData(a,b,c) == 0) data = ""; else data = ", " + World.getBlockData(a,b,c);
		StringToWrite += "World.setBlock("+ sx + ", " + sy + ", " + sz +", "+ World.getBlockID(a,b,c)+data+");\n";
	}
	var fos = java.io.FileOutputStream(file);
	fos.write(java.lang.String(StringToWrite).getBytes());
	fos.close();
}


function writeToClipboard()
{
	var StringToWrite = "";
	
	for(var a = Math.min(one.x,two.x); a <= Math.max(one.x,two.x); a++)
	for(var b = Math.min(one.y,two.y); b <= Math.max(one.y,two.y); b++)
	for(var c = Math.min(one.z,two.z); c <= Math.max(one.z,two.z); c++)
	{
		if(World.getBlockID(a,b,c) == 0) continue;
		
		if(a-Math.min(one.x,two.x) == 0) sx = "x";
		if(a-Math.min(one.x,two.x) > 0) sx = "x+" + (a-Math.min(one.x,two.x));
		if(a-Math.min(one.x,two.x) < 0) sx = "x-" + (a-Math.min(one.x,two.x));
		
		if(b-Math.min(one.y,two.y) == 0) sy = "y";
		if(b-Math.min(one.y,two.y) > 0) sy = "y+" + (b-Math.min(one.y,two.y));
		if(b-Math.min(one.y,two.y) < 0) sy = "y-" + (b-Math.min(one.y,two.y));
		
		if(c-Math.min(one.z,two.z) == 0) sz = "z";
		if(c-Math.min(one.z,two.z) > 0) sz = "z+" + (c-Math.min(one.z,two.z));
		if(c-Math.min(one.z,two.z) < 0) sz = "z-" + (c-Math.min(one.z,two.z));
		
		if(World.getBlockData(a,b,c) == 0) data = ""; else data = ", " + Worl.getBlockData(a,b,c);
		StringToWrite += "World.setBlock("+ sx + ", " + sy + ", " + sz +", "+ World.getBlockID(a,b,c)+data+");\n";
	}
	runAsGUI(function()
	{
		context.getSystemService(android.content.Context.CLIPBOARD_SERVICE).setText(StringToWrite);
	});
}

/*
function procCmd(cmd)
{
	if(cmd == "options") ShowOptions();
	if(cmd == "help") clientMessage("<SDesya74> Вы используете мод Speed Code. Версия мода - 1.3. Команды в моде: /options, /help, /default. Спасибо за выбор моего мода!");
	if(cmd == "default")
	{
		Options = {
			showMessages:true,
			saveTo:"file",
			path:"games/com.mojang",
			name:"Speed Code.txt",
			itemId:341		};
		clientMessage("Установлены настройки по умолчанию");
		leaveGame();
	}
}
*/

function ShowOptions()
{
	runAsGUI(function()
	{
		var dialog = new android.app.AlertDialog.Builder(context);
		dialog.setTitle("Настройки Speed Code");
		var scroll = new android.widget.ScrollView(context);
		var layout = new android.widget.LinearLayout(context);
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		
		
		var PathText = new android.widget.TextView(context);
		PathText.setTextSize(20);
		PathText.setText("Путь к файлу с кодом");
		
		
		var PathEdit = new android.widget.EditText(context);
		PathEdit.setHint("Путь к файлу с кодом");
		PathEdit.setText(Options.path+"");
		PathEdit.addTextChangedListener(new android.text.TextWatcher({
			onTextChanged:function(s,start,before,count)
			{
				Options.path = PathEdit.getText()+"";
			}
		}));
		
		
		var NameText = new android.widget.TextView(context);
		NameText.setTextSize(20);
		NameText.setText("Название файла с кодом");
		
		
		var NameEdit = new android.widget.EditText(context);
		NameEdit.setHint("Название файла с кодом");
		NameEdit.setText(Options.name+"");
		NameEdit.addTextChangedListener(new android.text.TextWatcher({
			onTextChanged:function(s,start,before,count)
			{
				Options.name = NameEdit.getText()+"";
			}
		}));
		
		
		
		var Switch = new android.widget.Switch(context);
		Switch.setText("Показывать сообщения");
		Switch.setTextSize(20);
		Switch.setChecked(Options.showMessages == true);
		Switch.setOnCheckedChangeListener(function()
		{
			Options.showMessages = !Options.showMessages;
		});
		layout.addView(Switch);
		
		
		var SaveText = new android.widget.TextView(context);
		SaveText.setTextSize(20);
		SaveText.setText("Сохранять код в");
		layout.addView(SaveText);
		
		var Save = Options.saveTo == "file" ? true : false;
		
		
		var SaveToggle = new android.widget.ToggleButton(context);
		SaveToggle.setTextOn("файл");
		SaveToggle.setTextOff("буфер обмена");
		SaveToggle.setChecked(Save);
		SaveToggle.setOnCheckedChangeListener(function()
		{
			Save = !Save;
			Options.saveTo = Save == true ? "file" : "clip";
			
			if(Options.saveTo == "file")
			{
				layout.addView(PathText);
				layout.addView(PathEdit);
				layout.addView(NameText);
				layout.addView(NameEdit);
			}else{
				layout.removeView(PathText);
				layout.removeView(PathEdit);
				layout.removeView(NameText);
				layout.removeView(NameEdit);
			}
		});
		layout.addView(SaveToggle);
		
	
		
		
		
		var IdText = new android.widget.TextView(context);
		IdText.setText("Название вещи-маркера: " + Item.getName(Options.itemId,0));
		IdText.setTextSize(20);
		layout.addView(IdText);
		
		var EditId = new android.widget.EditText(context);
		EditId.setText(Options.itemId+"");
		
		EditId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		EditId.addTextChangedListener(new android.text.TextWatcher({
			onTextChanged:function(s,start,before,count)
			{
				Options.itemId = parseInt(EditId.getText());
				IdText.setText("Название вещи-маркера: " + Item.getName(Options.itemId,0));
			}
		}));
		layout.addView(EditId);
		
		
		if(Options.saveTo == "file")
		{
			layout.addView(PathText);
			layout.addView(PathEdit);
			layout.addView(NameText);
			layout.addView(NameEdit);
		}
		
		
		
		scroll.addView(layout);
		dialog.setView(scroll);
		dialog.setCancelable(false);
		dialog.setPositiveButton("Готово",function()
		{
		  leaveGame();
		});
		dialog.create().show();
	});
}
