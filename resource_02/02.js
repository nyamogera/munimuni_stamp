(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 320,
	fps: 20,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.ham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404040").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape.setTransform(22.1,167.4,0.999,1.071,0,-150.9,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC0D4").s().p("ACjCxQgrgJgcgfQg6AQg3gRQg3gQgkgsQgIAGgKADQgwAVgwgSQgwgSgTguQgLgYAOgmQAPgtAmghQBmhbDDAqQDDArAlCHQAOA0gOAvQgOAsgdAMQgcAMgdAAQgOAAgPgDg");
	this.shape_1.setTransform(23.2,163.6,0.527,0.527,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404040").s().p("AA6AjQgfAMgegGQgigHgTgXQg3AegngbQglgWALgjQAFgRANABQAMADADASQAGAiAiABQAhABAUgcQAKAWAdALQAjATApgWQAcAmAZgKQATgHAEgVQAEgSAUABQAUAAgIAYQgOAwgnAEIgJABQgdAAgcgZg");
	this.shape_2.setTransform(116.3,188.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC0D4").s().p("AC7CzQgzgCglgnIgNgQQgxAag4gHQg6gIgvgmQgnARgqgKQgsgJgfgiQgWgWAGgsQAFgxAigpQBahvDBAoQDFApA5B8QAWAtgFAuQgDApgUATQghAfguAAIgIAAg");
	this.shape_3.setTransform(117.3,184.8,0.527,0.527);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404040").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape_4.setTransform(96.9,187.1,1,1.071,0,-178.9,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:117.3,y:184.8}},{t:this.shape_2}]}).to({state:[{t:this.shape_3,p:{x:97.3,y:181.8}},{t:this.shape_4}]},1).wait(1));

	// レイヤー 17
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5BVQgFgEgDgEQgaAPgfgBQgggBgbgRQgVAKghgMQgigLAAgWQgChDAbghQApgxBrAMQBsANAXA9QAIAVAAAeQgCAjAAAOQABAZgnACIgHAAQghAAgUgRg");
	this.shape_5.setTransform(97.3,175.2,1.023,0.932);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({_off:false},0).wait(1));

	// レイヤー 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("ACrHrQhjgNhjiOQgggsgcg1IgWgrIk7jDQgegRgQgeQgRgfACgjQABgiASgeQATgdAfgRIGNjQQBjg1BlgJQB2gKBKA6QBLA7AbB8QAYBwgaBqIhmGXQgPA/gcAcQgnAohKAAQgVAAgXgEg");
	this.shape_6.setTransform(137.2,33.1,0.419,0.419);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#404040").s().p("ADDHgQgmgKgcgbIjujsIk7jEQgegQgQgfQgRgeACgjQABgjASgdQATgeAfgQIGNjRQBjg1BlgJQB2gKBKA6QBLA8AbB7QAYBxgaBqIhmGWQgJAmgbAcQgbAcgmALQgTAFgUAAQgSAAgSgEg");
	this.shape_7.setTransform(135.2,27.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(2));

	// レイヤー 5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AkzB+QgvgogBhNQgBg/Acg0QAcg0AXAWQARASgIAUQgEALgMAQQgZA0ARAtQAQAuAuAVQAwAVA6gSQAxgQAtgrQAsApA3AQQBCATA+gVQA6gVAagtQAbgugZgzQgOgVgHgPQgMgdASgRQAWgWAgAvQAfAwADA/QADBJgvAuQg6A4h7gCQg3gBg1gZQgjgSgSgSQgYAdgWAOQgYAOggAFQghAFgcAAQhJAAgpgjgAAAAFIAAAAIAAAAg");
	this.shape_8.setTransform(63.3,121.7,0.527,0.527,0,0,0,3.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(2));

	// レイヤー 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9CBA").s().p("AgRAsQgOgHgIgNIgYgiQgIgOAHgNQAHgOAQAAIA7AAQAeAAAOAaQAHANgBAMQAAANgIALIAAAAQgSAcgggBQgOABgNgIg");
	this.shape_9.setTransform(59.2,112.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2));

	// レイヤー 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiHCIQg4g4AAhQQAAhPA4g3QA5g5BOAAQBPAAA5A5QA4A3AABPQAABQg4A4Qg5A4hPAAQhOAAg5g4g");
	this.shape_10.setTransform(53.3,119.3,0.457,0.527);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiGCIQg5g5AAhPQAAhPA5g4QA4g4BOAAQBQAAA4A4QA4A4AABPQAABPg4A5Qg4A4hQAAQhOAAg4g4g");
	this.shape_11.setTransform(68.8,119.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(2));

	// レイヤー 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#404040").ss(5,1,1).p("A/0kNQAvk4C3keQC0kXEYjSQEdjVFXhqQFphwF0AXQMDAvIQFMQGvEPD9HCQC9FQBNGXQAtDvAADXQAAKXqcE0Qo8EIwcAAQwfAApIkIQquk2AAqVQAAjXBHjOQBEjGCFi3g");
	this.shape_12.setTransform(121.6,92.9,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2));

	// レイヤー 9
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAkQgOgPAAgVQAAgUAOgPQAOgPASAAQATAAAOAPQAOAPAAAUQAAAVgOAPQgOAPgTAAQgSAAgOgPg");
	this.shape_13.setTransform(31.8,89.7,0.527,0.527);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah4CFQgzg3ABhOQgBhMAzg3QAzg4BFAAQBGAAAzA4QAzA3gBBMQABBOgzA3QgzA3hGAAQhFAAgzg3g");
	this.shape_14.setTransform(29.3,94.5,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// レイヤー 10
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_15.setTransform(112.5,92.6,0.527,0.527);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiECFQg3g4AAhNQAAhMA3g3QA4g4BMAAQBNAAA4A4QA3A3AABMQAABNg3A4Qg4A3hNAAQhMAAg4g3g");
	this.shape_16.setTransform(109.8,97.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

	// レイヤー 11
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiCBBQgOgUgJgiQgIgjgEgQQgIgaAngMQAlgMAcAOQAGACAEAEQAWgXAggIQAfgHAgALQASgRAkAEQAlADAHAXQAVBJgSAoQgbA/hxAQQgVAEgUAAQhMAAgggvg");
	this.shape_17.setTransform(27.5,162.8,0.81,0.914,0,-134.2,-135.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiCBBQgOgUgJgiQgIgjgEgQQgIgaAngMQAlgMAcAOQAGACAEAEQAWgXAggIQAfgHAgALQASgRAkAEQAlADAHAXQAVBJgSAoQgbA/hxAQQgVAEgUAAQhMAAgggvg");
	this.shape_18.setTransform(118.3,177.7,0.962,0.787,0,-164.2,-165.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).to({state:[]},1).wait(1));

	// レイヤー 12
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE88F").s().p("A5WXfQquk2AAqWQAAjWBHjPQBFjGCDi2QAwk5CzkYQCwkSEVjNQEZjRFZhtQFphyGAAJQLbARIHFGQGoEJEKHLQDHFZBeGjQA9ETAAC+QAAKXqcE1Qo7EIwcAAQwfAApIkIg");
	this.shape_19.setTransform(121.6,93,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(2));

	// レイヤー 13
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("ACrHrQhjgNhjiOQgggsgcg1IgWgrIk7jDQgegRgQgeQgRgfACgjQABgiASgeQATgdAfgRIGNjQQBjg1BlgJQB2gKBKA6QBLA7AbB8QAYBwgaBqIhmGXQgPA/gcAcQgnAohKAAQgVAAgXgEg");
	this.shape_20.setTransform(36.3,36.6,0.415,0.419,0,7.5,-172.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#404040").s().p("AkPHSQgmgKgbgcQgbgcgJgmIhmmXQgYhiAhhgQAhhgBQg/QBQg/BlgJQBlgJBYAvIGNDRQAfAQATAdQASAeACAiQABAjgRAfQgQAfgeARIk7DCIjuDsQgcAcglAJQgSAFgSAAQgUAAgUgGg");
	this.shape_21.setTransform(39.6,29.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(2));

	// レイヤー 14
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC0D4").s().p("ACjCwQgrgIgdgfQg6AQg2gRQg3gRgkgrIgSAJQgxAUgvgSQgwgSgTgtQgLgYAOgnQAPgsAmgiQBmhbDDArQDDArAlCHQAOA0gPAvQgOAsgcAMQgcALgdAAQgOAAgPgDg");
	this.shape_22.setTransform(128.8,146.8,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(2));

	// レイヤー 15
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC0D4").s().p("ABrCPQgIgGgGgJQg1Aig7AAQg+ABgygiQgoAXgugEQgugEgigfQgXgVAFgyQAFgzAkgwQBeiDDOAPQDRAQA+B8QAXAtgEAyQgDAsgVAXQgmApg2AFIgKAAQgwAAgjggg");
	this.shape_23.setTransform(208.3,155.9,0.527,0.527);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#404040").s().p("ACOBMQgUgRAPgMQAXgUgBgZQgBgVgTgRQgSgSgXgBQgZgCgQAUQgogVgkASQgdANgLAVQgTgZghABQgiACgGAdQgEARgMADQgNACgFgRQgKgeAlgXQAogaA3AbQATgWAigHQAegGAfALQAPgNAdACQAfABAYAQQBAAqgqBaQgHAOgJAAQgHAAgHgGg");
	this.shape_24.setTransform(223.4,157.2,1,1.071,0,-178.9,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23,p:{scaleX:0.527,scaleY:0.527,x:208.3}}]}).to({state:[{t:this.shape_23,p:{scaleX:0.526,scaleY:0.526,x:223.8}},{t:this.shape_24}]},1).wait(1));

	// レイヤー 16
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#404040").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape_25.setTransform(53.9,182.4,1,1.071,0,-173.9,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC0D4").s().p("ACjCxQgrgJgcgfQg6AQg3gRQg3gQgkgsQgIAGgKADQgwAVgwgSQgwgSgTguQgLgYAOgmQAPgtAmghQBmhbDDAqQDDArAlCHQAOA0gOAvQgOAsgdAMQgcAMgdAAQgOAAgPgDg");
	this.shape_26.setTransform(54.1,178.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.7,248.2,197.5);


// stage content:



(lib._02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ham
	this.instance = new lib.ham("synched",0);
	this.instance.setTransform(167.7,302,1,1,0,0,0,121.5,194.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.95,startPosition:1},1).wait(1));

	// レイヤー 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#159200").s().p("ADHFSQgNgBgIgLInIo7QgIgKABgNQACgOAKgIIAzgoQAKgJANACQANABAJALIHII7QAIAKgBAOQgCANgKAIIgzAoQgJAHgLAAIgEAAg");
	this.shape.setTransform(329,224.8,0.527,0.527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24FF00").s().p("ACoFkQgWgDgOgRImtoaQgOgRACgWQACgWASgOIBThCQASgOAVACQAXADANARIGtIaQAOARgCAWQgCAWgSAOIhTBDQgPALgRAAIgHAAg");
	this.shape_1.setTransform(330.7,223.5,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:330.7,y:223.5}},{t:this.shape,p:{x:329,y:224.8}}]}).to({state:[{t:this.shape_1,p:{x:320.7,y:230.5}},{t:this.shape,p:{x:319,y:231.8}}]},1).wait(1));

	// レイヤー 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#159200").s().p("ACEFyQgMgFgHgLIlUqHQgGgMAEgNQAEgMALgHIA6geQALgGANAEQANAEAGAMIFVKGQAGAMgEANQgEANgMAGIg5AeQgHAEgIAAIgKgBg");
	this.shape_2.setTransform(285.8,255.4,0.527,0.527);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24FF00").s().p("ABiF9QgVgHgKgTIlBpiQgKgTAGgVQAHgVATgLIBegxQAUgLAVAHQAVAGAKAUIFBJhQAKAUgGAVQgHAVgTAKIheAyQgMAHgMAAQgIAAgJgDg");
	this.shape_3.setTransform(287.7,254.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:287.7,y:254.4}},{t:this.shape_2,p:{x:285.8,y:255.4}}]}).to({state:[{t:this.shape_3,p:{x:276.5,y:263.5}},{t:this.shape_2,p:{x:274.6,y:264.5}}]},1).wait(1));

	// レイヤー 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#159200").s().p("ABIGCQgLgFgFgNIjqq1QgEgMAGgMQAFgMANgFIA+gVQANgEAMAGQALAGAFANIDpK0QAFANgGAMQgFAMgNAEIg9AVQgGACgFAAQgHAAgIgEg");
	this.shape_4.setTransform(241.2,275.9,0.527,0.527);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24FF00").s().p("AAlGIQgUgKgHgVIjdqMQgHgWAKgTQAKgUAVgHIBlgjQAUgGAUAJQAUAKAHAVIDdKNQAHAUgKAUQgKAUgVAHIhlAiQgJADgIAAQgMAAgLgFg");
	this.shape_5.setTransform(243.3,275.2,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:243.3,y:275.2}},{t:this.shape_4,p:{x:241.2,y:275.9}}]}).to({state:[{t:this.shape_5,p:{x:223.6,y:282}},{t:this.shape_4,p:{x:221.5,y:282.7}}]},1).wait(1));

	// レイヤー 8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#159200").s().p("AgtGGQgJgJgBgOIgQraQgBgOAKgKQAIgKAOAAIA+gBQAOAAAKAJQAJAJAAANIARLcQABANgKAKQgJAKgNgBIg/ACIgBAAQgMAAgKgJg");
	this.shape_6.setTransform(180.4,286.1,0.527,0.527);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24FF00").s().p("AhRGBQgQgPAAgXIgQqwQgBgXAQgQQAPgQAWgBIBpgCQAVAAARAPQAQAPAAAWIAQKyQABAVgQARQgPAPgWABIhpACIgBABQgVAAgQgPg");
	this.shape_7.setTransform(182.5,286,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:182.5}},{t:this.shape_6,p:{x:180.4}}]}).to({state:[{t:this.shape_7,p:{x:165.3}},{t:this.shape_6,p:{x:163.1}}]},1).wait(1));

	// レイヤー 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#159200").s().p("AhPGIIg/gSQgMgEgHgMQgGgMAEgNIDLq9QADgNAMgHQAMgGANADIA+ASQANAFAHALQAGAMgEANIjLK9QgEANgMAHQgHAEgIAAIgJgBg");
	this.shape_8.setTransform(124.2,285.7,0.527,0.527);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24FF00").s().p("Ag7GOIhngeQgVgHgKgTQgLgTAGgVIDCqWQAEgVATgLQAUgLAVAHIBmAdQAWAHAKATQALATgGAWIjCKVQgFAWgTAKQgMAHgNAAQgIAAgHgCg");
	this.shape_9.setTransform(126.3,286.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:126.3,y:286.4}},{t:this.shape_8,p:{x:124.2,y:285.7}}]}).to({state:[{t:this.shape_9,p:{x:110.1,y:279}},{t:this.shape_8,p:{x:108,y:278.4}}]},1).wait(1));

	// レイヤー 10
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#159200").s().p("AiLF3Ig6gcQgNgFgEgNQgFgNAGgMIE2qWQAFgMANgFQANgEAMAFIA6AcQAMAFAFANQAEANgFAMIk2KWQgGAMgMAFQgGACgFAAQgHAAgHgDg");
	this.shape_10.setTransform(75,264.3,0.527,0.527);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24FF00").s().p("Ah4GAIhgguQgUgKgIgUQgHgVAJgUIEkpwQAKgUAUgIQAVgHAUAJIBgAuQAUAKAIAUQAHAVgJAUIkkJwQgJATgVAJQgJADgJAAQgMAAgLgFg");
	this.shape_11.setTransform(76.9,265.2,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:76.9,y:265.2}},{t:this.shape_10,p:{x:75,y:264.3}}]}).to({state:[{t:this.shape_11,p:{x:60.7,y:254.9}},{t:this.shape_10,p:{x:58.7,y:254}}]},1).wait(1));

	// レイヤー 11
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#159200").s().p("AjVFSIgzgnQgLgIgCgNQgCgOAIgKIG4pIQAIgLANgCQANgBALAIIAzAnQALAIACANQACANgIALIm4JHQgIALgNACIgGAAQgKAAgIgGg");
	this.shape_12.setTransform(27,233.1,0.527,0.527);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24FF00").s().p("AjFFeIhVhAQgRgNgDgWQgDgWANgSIGeomQANgRAWgEQAWgDASAOIBVBAQASANADAWQADAWgOASImeImQgNARgWADIgIABQgRAAgPgLg");
	this.shape_13.setTransform(28.7,234.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{x:28.7,y:234.4}},{t:this.shape_12,p:{x:27,y:233.1}}]}).to({state:[{t:this.shape_13,p:{x:16.6,y:224.3}},{t:this.shape_12,p:{x:14.9,y:223}}]},1).wait(1));

	// レイヤー 4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgYUA5lQrNkwoqopQopoqkwrNQk6rnAAsuQAAstE6rmQEwrOIpoqQIqoqLNkvQLnk7MtAAQMtAALnE7QLOEvIqIqQIqIqEvLOQE6LmABMtQgBMuk6LnQkvLNoqIqQoqIprOEwQrnE6stAAQstAArnk6g");
	this.shape_14.setTransform(168.7,37.8,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(2));

	// レイヤー 12
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1ED300").s().p("EgdIBFBQtdltqXqXQqYqYlstbQl4t8AAvOQAAvOF4t6QFstdKYqXQKXqYNdlsQN6l4POAAQPOAAN7F4QNdFsKXKYQKXKXFtNdQF4N6AAPOQAAPOl4N8QltNbqXKYQqXKXtdFtQt7F4vOAAQvOAAt6l4g");
	this.shape_15.setTransform(168.7,67.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.3,-24.8,504.8,504.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;