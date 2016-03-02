describe('Web - Vizabi automated test', function() {
 jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
 
 var baseUrl;
 var play = element(by.css("button.vzb-ts-btn-play.vzb-ts-btn"));
 var pause = element(by.css("button.vzb-ts-btn-pause.vzb-ts-btn"));
 var slider = element(by.css("#vizabi-placeholder >div > div.vzb-tool-stage > div.vzb-tool-timeslider > div > div.vzb-ts-slider-wrapper > svg.vzb-ts-slider > g > g.vzb-ts-slider-slide > circle"));
 var EC = protractor.ExpectedConditions;
 
 
// browser.ignoreSynchronization = true;
 browser.manage().timeouts().pageLoadTimeout(90000);
// browser.manage().window().maximize(); 
 browser.manage().window().setSize(1280, 800);
 baseUrl = "https://tools-stage.gapminderdev.org";
 
	// First Test
	
	 // If I click on play when I'm on the year 2015, the time slider handle
	 // moves,, and the bubbles change position. It pauses automatically when it
	 // reached the final year.
	 
	/* 
	
	it('Play', function() {
		browser.get(baseUrl + "/tools/bubbles");
		browser.wait(EC.visibilityOf(play), 20000 , "Chart is not Loaded");
		
		
		// Getting year's 1st digit
		var firstDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(1)"));
		browser.wait(EC.visibilityOf(firstDigit), 5000);
		firstDigit.getText().then(function (firstDigitIntro) {
		var firstDigitText = firstDigitIntro;
		console.log(firstDigitText);
		
		// Comparing the year's 1st digit
		var val1= "2";
		expect(firstDigitText).toBe(val1);
		
		
		// Getting year's 2nd digit
		var secondDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(2)"));
		browser.wait(EC.visibilityOf(secondDigit), 5000);
		secondDigit.getText().then(function (secondDigitIntro) {
		var secondDigitText = secondDigitIntro;
		console.log(secondDigitText);
		
		// Comparing the year's 2nd digit
		var val2= "0";
		expect(secondDigitText).toBe(val2);
		
		
		// Getting year's 3rd digit
		var thirdDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(3)"));
		browser.wait(EC.visibilityOf(thirdDigit), 5000);
		thirdDigit.getText().then(function (thirdDigitIntro) {
		var thirdDigitText = thirdDigitIntro;
		console.log(thirdDigitText);
		
		// Comparing the year's 3rd digit
		var val3= "1";
		expect(thirdDigitText).toBe(val3);
		
		
		// Getting year's 4th digit
		var fourthDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(4)"));	
		browser.wait(EC.visibilityOf(fourthDigit), 5000);
		fourthDigit.getText().then(function (fourthDigitIntro) {
		var fourthDigitText = fourthDigitIntro;
		console.log(fourthDigitText);
		
		// Comparing the year's 4th digit
		var val4= "5";
		expect(fourthDigitText).toBe(val4);
		
		//Getting location of slider before play		
		slider.getLocation().then(function (beforePlaySliderLocation1) {
		var startX = beforePlaySliderLocation1.x;
		console.log(startX);
		
		});
		
		//Clicking play
		play.click();
		browser.sleep(50000);
		
		//Getting location of slider after completing play
		slider.getLocation().then(function (beforePlaySliderLocation) {
		var FinalX = beforePlaySliderLocation.x;
		console.log(FinalX);	
	
	
		//Comparing slider location
		expect(startX).toBe(FinalX);

        
		
	
});
});	
}); 	
});
});
}); 	

	
	*/
	
	
	
			//******************************************************************************************************************//
	
	
	//Second Test
	
	/* United states should have 2015: GDP: 53354 $/year/person. */
	
	it('USbubblehover', function(){
		
		browser.get(baseUrl + "/tools/bubbles");
		browser.sleep(15000);
		var USAbubble =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));
		//hover.moveToElement(chinabubble).moveByOffset(0, 15).click().perform();
		browser.actions().dragAndDrop(USAbubble,{x:0,y:20}).click().click().perform();
		//browser.actions().mouseMove(chinabubble).perform();
		browser.sleep(3000);
		console.log("hover");
		browser.sleep(3000);
		
		var line= element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-axis-x"));
		line.getText().then(function (USAval) {
		var val = USAval;
		console.log(val);
		
		var string1= "53354";
		expect(val).toBe(string1);
		});
	});	
			//***************************************************************************************************************//
			
		
		//Third Test		
		
	/* If I select China and the United States bubbles and drag the timeslider, 
	we see the trails being left for those two countries. */	
	
	

	
	it('MakeTrialsDrag', function() {
	
		browser.get(baseUrl + "/tools/bubbles");
		browser.sleep(5000);
	
		var USAbubble = element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));
		
		browser.sleep(5000);
		
		browser.actions().dragAndDrop(USAbubble,{x:0,y:-15}).click().perform();

		//browser.actions().dragAndDrop(USAbubble, {x: 0, y: 15}).click().perform();
		
		browser.sleep(5000);

		var chinabubble = element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-chn"));
		//hover.moveToElement(chinabubble).moveByOffset(0, 15).click().perform();
		browser.sleep(5000);
		browser.actions().dragAndDrop(chinabubble, {x:0 , y:20}).click().perform();
		browser.sleep(3000);
		
		//var play = element(by.css("button.vzb-ts-btn-play.vzb-ts-btn"));

		browser.sleep(5000);
		console.log("Detecting Play");
		play.click();
		browser.sleep(5000);

		//var pause = element(by.css("button.vzb-ts-btn-pause.vzb-ts-btn"));
		browser.sleep(5000);
		pause.click();
		browser.sleep(3000);

		slider.getLocation().then(function (beforePlaySliderLocation) {
		var beforePlaySliderDivLocation = beforePlaySliderLocation.x;
		console.log(beforePlaySliderDivLocation);
				
		browser.sleep(3000);		
		
		//var slider = element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-timeslider > div > div.vzb-ts-slider-wrapper > svg > g > g.vzb-ts-slider-slide > circle"));
		browser.actions().dragAndDrop(slider, {x:150, y:0}).perform();
		//Slider ball position before drag
		browser.sleep(5000);
		
		slider.getLocation().then(function (afterPlaySliderLocation) {
		var afterPlaySliderDivLocation = afterPlaySliderLocation.x;
		console.log(afterPlaySliderDivLocation);
		browser.sleep(3000);
		
		
			expect(afterPlaySliderDivLocation).toBeGreaterThan(beforePlaySliderDivLocation);
		
		});
				
			});
			
	});
					
	



				//************************************************************************************************************
	
	//Forth Test
	
	/*
	 * User can hover the bubbles with a cursor, 
	 * the bubbles react to hovering and a tooltip appears, and contains the country name
	 */
		
	
	it('USAhover', function(){
		
		browser.get(baseUrl + "/tools/bubbles");
		browser.sleep(15000);
		var chinabubble =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-chn"));
		//hover.moveToElement(chinabubble).moveByOffset(0, 15).click().perform();
		browser.actions().dragAndDrop(chinabubble,{x:0,y:20}).click().click().perform();
		//browser.actions().mouseMove(chinabubble).perform();
		browser.sleep(3000);
		console.log("hover");
		browser.sleep(3000);
		
		
		// Getting attributes of Tooltip
		var tooltip = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-tooltip"));
		tooltip.getText().then(function (tooltipIntro) {
		var tooltipText = tooltipIntro;
		console.log(tooltipText);
		browser.sleep(3000);
		
		// Comparing the country name
		var findMe = "China";
		expect(findMe).toBe(tooltipText);

			
			
			});
		});
		
	
		
		
			//*************************************************************************************************************************
		
		//Fifth Test
			
		/*
	 * I can drag the label "United States" and drop it anywhere in the chart
	 * area
	 */

		
		//public void DragLabel() throws Exception {

	
		it('DragLabel', function(){
		
		browser.get(baseUrl + "/tools/bubbles");
		
		browser.sleep(10000);
		var USAbubble =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));
									  	
		
		browser.actions().dragAndDrop(USAbubble, {x: 0, y: -15}).click().perform();
		browser.sleep(3000);
		var USAlabel =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-labels"));
		//hover.moveToElement(USAbubble).moveByOffset(0, -20).click().perform();
		
		browser.sleep(5000);
		console.log("dragged");
		
		// label drag and drop
		var USALabel =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-labels"));
			
		USAlabel.getLocation().then(function(initiallocation){
		var inilocation = initiallocation.x;
		console.log(inilocation);
		
		browser.sleep(3000);
		browser.actions().dragAndDrop(USAlabel, {x: -150, y: -160}).click().perform();
		browser.sleep(3000);
		
		
		USAlabel.getLocation().then(function(finallocation){
		var finlocation = finallocation.x;
		console.log(finlocation);
		
		expect(inilocation).not.toEqual(finallocation);
		
			
		});

		});
		});		
			
			//******************************************************************************************************************
			
			
		//Sixth Test
		
		
		/* I can select and deselect countries using the button "Find" to the right.*/

	
	//public void deselect() throws Exception {

	it('deselect',function(){
	

		browser.get(baseUrl + "/tools/bubbles");
		browser.sleep(10000);
		var find =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(2) > span.vzb-buttonlist-btn-icon.fa"));
		find.click();
		browser.sleep(3000);

		var placetext =element(by.css("#vzb-find-search"));
		placetext.sendKeys("china");
		browser.sleep(3000);

		// Check China Text Box
		var chinabubble =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-active.notransition.vzb-popup > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(37) > label"));
		chinabubble.click();
		browser.sleep(3000);

		// Remove Text
		placetext.clear();
		browser.sleep(3000);

		// Place Text in Search / Find Field
		var placetext2 =element(by.css("#vzb-find-search"));
		placetext2.sendKeys("united states");
		browser.sleep(3000);

		// Check United States Text Box
		var USAbubble =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-active.notransition.vzb-popup > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(188) > label"));
		USAbubble.click();
		browser.sleep(3000);

		// Remove Text
		placetext2.clear();
		browser.sleep(3000);

		var ok =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-active.notransition.vzb-popup > div > div.vzb-dialog-buttons > div.vzb-dialog-button.vzb-label-primary > span"));
		ok.click();
		browser.sleep(3000);

		// Getting USA opacity value
		var USA =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > g.vzb-bc-entity.trail-usa > g:nth-child(216)"));
		USA.getCssValue('opacity').then(function(USAopacity1){
		var USAopacity = USAopacity1;
		console.log(USAopacity);
		browser.sleep(3000);
		
		
		// Getting Nigeria Opacity value
		var nga =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-nga"));
		nga.getCssValue('opacity').then(function(NGAopacity1){
		var NGAopacity = NGAopacity1;
		console.log(NGAopacity);
		browser.sleep(3000);
			

		// Comapring Opacities
		expect(NGAopacity).toBeLessThan(USAopacity);
		
		
		});
		
		});
		});	
	
	
	
	
	//********************************************************************************************************************
	
	
	
	
	//Seventh Test 
	
	
	/*
	 * If I select a country, click "Lock", and drag the time slider or play,
	 * all unselected countries stay in place and only the selected one moves
	 */
	
//	public void lock() throws InterruptedException {

		// Bubble Chart Loading

	it('Lock',function(){
				
		browser.get(baseUrl + "/tools/bubbles");
		
		browser.sleep(4000);
		console.log("Wait1 Completed");

		// Selecting Country by giving country name in Find 

		var find =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(2) > span.vzb-buttonlist-btn-icon.fa"));
		find.click();
		browser.sleep(3000);
		console.log("Search bar clicked");

		// Giving country name in Search bar
	
		var placetext =element(by.css("#vzb-find-search"));
		placetext.sendKeys("United States");
		
		// find.sendKeys("United States");
		browser.sleep(3000);

		// Clicking Check box
		var checkBox =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(188) > label"));
		checkBox.click();
		browser.sleep(3000);
		console.log("Country selected");
		

		// Remove text from search bar
		placetext.clear();
		console.log("Text removed");
		browser.sleep(3000);

		
		// Click OK
		var OK =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons > div.vzb-dialog-button.vzb-label-primary"));
		OK.click();
		
		//Removing hovering effect
		var USBubble =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));

		browser.actions().mouseMove(USBubble,{x:5, y:15}).perform();
		
		// Click Lock
		var lok =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(4) > span.vzb-buttonlist-btn-icon.fa"));
		lok.click();
		console.log("Lock");
		browser.sleep(3000);
	
		// Get co-ordinates of Slider ball
		var circle =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-timeslider > div > div.vzb-ts-slider-wrapper > svg > g > g.vzb-ts-slider-slide > circle"));
		circle.getLocation();
		
		// Getting USA size before play
				
		var USA =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));
		
		//Getting size of China before play
		var chn =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-chn"));
		
		// Click for Play
		play.click();
		browser.sleep(5000);
		
		//Clicking pause
		var pause =element(by.css("button.vzb-ts-btn-pause.vzb-ts-btn"));
		pause.click();
		browser.sleep(3000);
		
		USA.getCssValue('r').then(function(radius){
		var rad=radius;
		console.log(rad);
		
		//Getting sizes after play
		
		// Comapring sizes
		
		play.click();
		
		browser.sleep(10000);
		
		USA.getCssValue('r').then(function(finradius){
		var fradius=finradius;
		console.log(fradius);
	
		expect(rad).not.toEqual(fradius);
	
		});
		});
		});
	


		
	//****************************************************************************************************************
	
	
	// Eighth Test
	
	/*I can drag any panel on large screen resolutions if I drag the hand icon*/
	
	

		// Bubble Chart Loading
	
	it('dragPanel',function(){
				
		browser.get(baseUrl + "/tools/bubbles");
	
		//browser.get('https://tools-stage.gapminderdev.org/tools/bubbles');
		browser.sleep(10000);
		console.log("Wait1 Completed");

		// Selecting size icon
		var icon =element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(5) > span.vzb-buttonlist-btn-icon.fa"));
		icon.click();
		browser.sleep(5000);

		// Getting co-ordinates of Hand icon
		var hand =element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > span.thumb-tack-class.thumb-tack-class-ico-drag.fa > svg"));
		//browser.actions().dragAndDrop(icon,{x:0,y:0}).click().perform();
		//hand.getLocation;
		browser.sleep(5000);

		// Dragging the panel
		
		hand.getLocation().then(function (beforeDrag) {
			var bforDrag = beforeDrag;
			console.log(bforDrag);

		
		browser.actions().dragAndDrop(hand,{x:-150,y:100}).click().perform();
		browser.sleep(5000);
		
		hand.getLocation().then(function (AfterDrag) {
			var aftrDrag = AfterDrag;
			console.log(aftrDrag);
			
			expect(bforDrag).not.toEqual(aftrDrag);
	});
		});
		
	});
	
	
		//************************************************************************************************************
					
	
	
	
	//Ninth Test 
	
	/*
	 * Clicking color should bring the panel. I can change the color of bubbles
	 * to GDP per capita and Child Mortality and Regions
	 */

	
	//public void changeColor() throws InterruptedException {

		// Bubble Chart Loading

	
		it('changeColor',function(){

		browser.get(baseUrl + "/tools/bubbles");
	
		browser.sleep(10000);
		console.log("Wait1 Completed");

		// Getting USA rgb value before changes
		var USA = element(by.css(
			"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));
		//	console.log(BeforeChanges);
		USA.getCssValue('fill').then(function (bforchang) {
		var beforechange = bforchang;
		console.log(beforechange);
		browser.sleep(5000);
		
		
		// Clicking Dropdown of color
		var dropDown = element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button.vzb-buttonlist-btn.vzb-dialog-side-btn.vzb-active"));
		dropDown.click();
		browser.sleep(4000);

	
		// Clicking region
		var region = element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-scrollable.vzb-accordion > div.vzb-dialogs-dialog.vzb-moreoptions.vzb-accordion-section.vzb-accordion-active > div > div.vzb-dialog-title > span.vzb-caxis-selector"));
									
								//	"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-scrollable.vzb-accordion > div.vzb-dialogs-dialog.vzb-moreoptions.vzb-accordion-section.vzb-accordion-active > div > div.vzb-dialog-title > span.vzb-caxis-selector > span"
		region.click();
		browser.sleep(3000);

		// Clicking search bar
		var search = element(by.css("#vzb-treemenu-search"));
		search.click();
		browser.sleep(3000);

		// Giving GDP in search bar
		search.sendKeys("GDP per capita");
		browser.sleep(3000);

		// Clicking GDP button
		var button1 = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-treemenu > div.vzb-treemenu-wrap.vzb-dialog-scrollable.vzb-align-y-top.vzb-align-x-left > ul > li:nth-child(1)"));
		button1.click();
		browser.sleep(5000);

		// Getting USA rgb value after changes
		
		USA.getCssValue('fill').then(function (afterchang) {
			var afterchange = afterchang;
			console.log(afterchange);

		// Clicking Dropdown of color 2nd time
		dropDown.click();
		browser.sleep(3000);

		// Clicking region
		region.click();
		browser.sleep(3000);

		// Clicking search bar 2nd time
		search.click();
		browser.sleep(3000);

		// Remove text from search bar
		search.clear();
		browser.sleep(3000);

		// Giving Child moortality in search bar
		search.sendKeys("Child mortality rate");
		browser.sleep(3000);

		// Clicking Child mortality button
		var button2 = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-treemenu > div.vzb-treemenu-wrap.vzb-dialog-scrollable.vzb-align-y-top.vzb-align-x-left > ul > li:nth-child(1)"));
		button2.click();
		browser.sleep(5000);

		// Clicking Dropdown of color 3rd time
		dropDown.click();
		browser.sleep(3000);

		// Clicking region bar 3rd time
		region.click();
		browser.sleep(3000);

		// Clicking search bar 3rd time
		search.click();
		browser.sleep(3000);

		// Remove text from search bar
		search.clear();
		browser.sleep(3000);

		// Giving Region in search bar
		search.sendKeys("Region");
		browser.sleep(3000);

		// Clicking Child mortality button
		var button3 = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-treemenu > div.vzb-treemenu-wrap.vzb-dialog-scrollable.vzb-align-y-top.vzb-align-x-left > ul > li"));
		button3.click();
		browser.sleep(5000);
				
		// Comapring rgb values
		//assertTrue(BeforeChanges != AfterChanges);
		//console.log("**Test Pass**");

		
	
		expect(beforechange).not.toEqual(afterchange);	
		
		});
		});
});
				
			
		
			//**************************************************************************************************	
			
			
			
			//Tenth Test
			
						
				/*
	 * Clicking the bubble of the United States should select it. The bubble
	 * gets full opacity, while the other bubbles get lower opacity.
	 */

	
	//public void opacity() throws InterruptedException {

		// Bubble Chart Loading
		
	it('opacity',function(){
		
		
		browser.get(baseUrl + "/tools/bubbles");

		
		browser.sleep(10000);
		console.log("Chart Loaded");

		// Clicking the bubble of USA
	
	
		var USAbubble = element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));
	
		browser.actions().dragAndDrop(USAbubble,{x:0,y:-15}).click().perform();
		browser.sleep(3000);

		// Clicking option button
		var option = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(6) > span.vzb-buttonlist-btn-icon.fa"));
		option.click();
		browser.sleep(3000);

		// Clicking Opacity
		var opacity = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-scrollable.vzb-accordion > div:nth-child(1) > div > div.vzb-dialog-title"));
		opacity.click();
		browser.sleep(3000);

		// Getting USA opacity value
		var USA = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > g.vzb-bc-entity.trail-usa > g:nth-child(216)"));
		
		USA.getCssValue('opacity').then(function(USAopacity1){
		var USAopacity=USAopacity1;
		console.log(USAopacity);
		
		

		// Getting Nigeria Opacity value
		var nga = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-nga"));
		nga.getCssValue('opacity').then(function(ngaopacity1){
		var ngaopacity=ngaopacity1;
		console.log(ngaopacity);
		
		


		
		//Clicking OK
		var OK = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons > div"));
		OK.click();
		
		expect(USAopacity).not.toEqual(ngaopacity);
		
		console.log("**Test Pass**");
		browser.sleep(3000);

	
		});
		});
	
	});
	
	
	
			//**************************************************************************************************
			
		


		//	Eleventh Test
			
			/* The year appears on the background, un-cropped */
	//@Test
	//public void backgroundYear() throws InterruptedException {

		// Bubble Chart Loading
		
		
	it('backgroundyear',function(){
		
		
		browser.get(baseUrl + "/tools/bubbles");


		browser.sleep(10000);
		console.log("Chart Loaded");

		// Getting year's 1st digit
		var yearLoc1 = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(1)"));
		
		yearLoc1.getText().then(function (yearone) {
			var year1 = yearone;
			console.log(year1);
			var year01='2';
			expect(year1).toBe(year01);

	//var value1 = var.parsevar(text1);
		//assertTrue(value1 == 2);
		

		// Getting year's 2nd digit
		var yearLoc2 = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(2)"));
		yearLoc1.getText().then(function (yeartwo) {
			var year2 = yeartwo;
			console.log(year2);
		
			var year02='0';
			expect(year2).toBe(year02);

			
	//	assertTrue(value2 == 0);

		// Getting year's 3rd digit
		var yearLoc3 = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(3)"));
		yearLoc1.getText().then(function (yearthree) {
			var year3 = yearthree;
			console.log(year3);
			
			var year03='1';
			expect(year3).toBe(year03);

		//var value3 = var.parsevar(text3);
		
		// Getting year's 4th digit
		var yearLoc4 = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-bc-year > text:nth-child(4)"));
		yearLoc1.getText().then(function (yearfour) {
			var year4 = yearfour;
			console.log(year4);
			
			var year04='5';
			expect(year4).toBe(year04);

		//var value4 = var.parsevar(text4);
		//assertTrue(value4 == 5);
		
		console.log("**Test Pass**");
		browser.sleep(3000);
		
		
		
		});
		
		
		});

});




});


});
	

			//******************************************************************************************************
			
			
			
			
		//Twelth Test	
			
						
	/*
	 * I can unselect the bubble by clicking on the "x" of the label
	 * "United States", or by clicking on the bubble
	 */
	

	//public void unselectBubble() throws Exception {

		// Bubble Chart Loading
	
	it('deselect',function(){
		
		
		browser.get(baseUrl + "/tools/bubbles");
		
		browser.sleep(10000);
		console.log("Chart Loaded");

	


		// Hovering the US bubble
		var USAbubble = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-bubbles > circle.vzb-bc-entity.bubble-usa"));
		
		//browser.actions().mouseMove(axis,{x:371,y:1}).perform();
		browser.actions().dragAndDrop(USAbubble,{x:0,y:-15}).click().perform();
		browser.sleep(3000);

	
		// Unselect country by clicking bubble
	
		browser.actions().dragAndDrop(USAbubble,{x:0,y:-15}).click().perform();
		console.log("Bubble is unselected by clicking bubble");
		browser.sleep(3000);

		// Select the US bubble again
		browser.actions().dragAndDrop(USAbubble,{x:0,y:-15}).click().perform();
		browser.sleep(3000);

		
		// Unselect country by click
		var cross = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-labels > g > g"));
		browser.actions().dragAndDrop(cross,{x:0,y:0}).click().perform();	
		
		browser.sleep(3000);
		//cross.click();
		console.log("Bubble is unselected by clickin 'x' on tooltip\n**Test Pass**");
		browser.sleep(3000);
	});
	
		

	
	
								//**************************MOUNTAIN CHART*************************************
			
						
			
	/*
	 * Click "find" and check a few countries there, they should get selected on
	 * the visualization and their names should appear as a list on top left.
	 * Population should be displayed after the name.
	 */

	it('mountainFind', function() {
		browser.get(baseUrl + "/tools/mountain");		
		browser.sleep(15000);
		
		//Clicking on find
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(2) > span.vzb-buttonlist-btn-icon.fa")).click();
		browser.sleep(1000);
		
		// Place Text in Search / Find Field
		browser.element(by.css("#vzb-find-search")).sendKeys("china");
		browser.sleep(1000);
				
		// Check China Text Box
		var chn = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(30) > label")).click();
		browser.sleep(1000);
		
		
		// Getting name from check box
		var chinaCheckBox = element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(30)"));
		//var chinaCheckBoxText = chinaCheckBox.getText();
			
		//Getting text from China check box
		chinaCheckBox.getText().then(function (chinaCheckBoxTextIntro) {
		var chinaCheckBoxText = chinaCheckBoxTextIntro;
		console.log(chinaCheckBoxText);
		browser.sleep(1000);
		
		
		// Clicking OK of Find pop up
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons > div.vzb-dialog-button.vzb-label-primary > span")).click();
		browser.sleep(1000);
	
	
		// Getting atrributes of population
		var chinaBall = element(by.css("#chn-label > text:nth-child(3)"));
		chinaBall.getText().then(function (chinaBallIntro) {
		var chinaBallText = chinaBallIntro;
		console.log(chinaBallText);
		browser.sleep(1000);
		
		//Getting country name from population
		var subStr = chinaBallText.substring(0, 5);
		console.log(subStr);
		
		//Getting population
		var pop = chinaBallText.substring(7, 11);
		console.log(pop);
		browser.sleep(1000);
		
		//Comparing population
		var givenPop = "1.4B";
		expect(givenPop).toBe(pop);
		
		//Comparing country name
		expect(subStr).toBe(chinaCheckBoxText);

});	
});	
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////



	/*
	 * Click "show", check a few countries, you should get to see only these
	 * checked countries on the picture. (bad: you still see many other
	 * countries that are not checked, bad: you don't see anything)
	 */
	 
	 it('showMountain', function() {
		browser.get(baseUrl + "/tools/mountain");		
		browser.sleep(15000);

		// Clicking show icon
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(4) > span.vzb-buttonlist-btn-icon.fa")).click();
		browser.sleep(1000);
		
		// Giving the country name to search bar
		var search=browser.element(by.css("#vzb-show-search"));
		search.sendKeys("china");
		browser.sleep(1000);

		// Clicking the check box of china
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(50) > label")).click();
		browser.sleep(1000);
		
		//Removing text from search bar
		search.clear();
		browser.sleep(1000);
		
		// Giving second name to search bar
		search.sendKeys("united states");
		browser.sleep(1000);
		
		// Clicking the check box of USA
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(262) > label")).click();
		browser.sleep(1000);
		
		//Clicking OK of show pop up
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-active.notransition.vzb-popup > div > div.vzb-dialog-buttons > div.vzb-dialog-button.vzb-label-primary > span")).click();
		browser.sleep(1000);
		
		
		//Clicking find
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(2) > span.vzb-buttonlist-btn-icon.fa")).click();
		browser.sleep(1000);
		
		// Check China Text Box 
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div > label")).click();
		browser.sleep(1000);
		
		
		//Getting China Terxt from check box field
		var chinaCheckBox = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(1) > label"));				
		chinaCheckBox.getText().then(function (chinaCheckBoxTextIntro) {
		var chinaCheckBoxText = chinaCheckBoxTextIntro;
		console.log(chinaCheckBoxText);
		browser.sleep(1000);
		
		//Getting China Terxt from population		
		var chinaBall = element(by.css("#chn-label > text:nth-child(3)"));
		chinaBall.getText().then(function (chinaBallIntro) {
		var chinaBallText = chinaBallIntro;
		console.log(chinaBallText);
		browser.sleep(1000);		
		
		//Getting country name from population
		var subStrChn = chinaBallText.substring(0, 5);
		console.log(subStrChn);
					
		// Check USA Text Box
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(2) > label")).click();
		browser.sleep(1000);
		
		//Getting USA Text from check box field
		var usaCheckBoxText = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(2)"));				
		usaCheckBoxText.getText().then(function (USACheckBoxTextIntro) {
		var USACheckBoxText = USACheckBoxTextIntro;
		console.log(USACheckBoxText);
		
		
		//Getting USA Text from population
		var usaBall = browser.element(by.css("#usa-label > text:nth-child(3)"));		
		usaBall.getText().then(function (usaBallIntro) {
		var usaBallText = usaBallIntro;
		console.log(usaBallText);
		
		
		//Getting country name from population
		var subStrUSA = usaBallText.substring(0, 13);
		console.log(subStrUSA);		
		browser.sleep(1000);
		
		
		//Comparing China country name
		expect(subStrChn).toBe(chinaCheckBoxText);
		
		//Comparing USA country name
		expect(subStrUSA).toBe(USACheckBoxText);
		

});
});
});
});
});




//////////////////////////////////////////////////////////////////////////////////////////////////////

	/*
	 * in 2015, the percentage of people living in the extreme poverty should be
	 * 11.5 ± 0.3%, and the world population should be 7.3B.
	 */


	 it('mountainSelect', function() {
		browser.get(baseUrl + "/tools/mountain");		
		browser.sleep(15000);
	 
	 
		// Getting year's 1st digit
		var firstDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(1)"));
		firstDigit.getText().then(function (firstDigitIntro) {
		var firstDigitText = firstDigitIntro;
		console.log(firstDigitText);
		
		// Comparing the year's 1st digit
		var val1= "2";
		expect(firstDigitText).toBe(val1);
		
		
		// Getting year's 2nd digit
		var secondDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(2)"));
		secondDigit.getText().then(function (secondDigitIntro) {
		var secondDigitText = secondDigitIntro;
		console.log(secondDigitText);
		
		// Comparing the year's 2nd digit
		var val2= "0";
		expect(secondDigitText).toBe(val2);
		
		
		// Getting year's 3rd digit
		var thirdDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(3)"));
		thirdDigit.getText().then(function (thirdDigitIntro) {
		var thirdDigitText = thirdDigitIntro;
		console.log(thirdDigitText);
		
		// Comparing the year's 3rd digit
		var val3= "1";
		expect(thirdDigitText).toBe(val3);
		
		
		// Getting year's 4th digit
		var fourthDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(4)"));	
		fourthDigit.getText().then(function (fourthDigitIntro) {
		var fourthDigitText = fourthDigitIntro;
		console.log(fourthDigitText);
		
		// Comparing the year's 4th digit
		var val4= "5";
		expect(fourthDigitText).toBe(val4);
		
		
		// Clicking Options icon
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(5) > span.vzb-buttonlist-btn-icon.fa")).click();
		browser.sleep(1000);
		
		// Clicking X and Y
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-scrollable.vzb-accordion > div:nth-child(4) > div > div.vzb-dialog-title > span")).click();
		browser.sleep(1000);
		
		// Clicking probeline search bar
		var searchBar = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-scrollable.vzb-accordion > div.vzb-dialogs-dialog.vzb-moreoptions.vzb-accordion-section.vzb-accordion-active > div > div.vzb-dialog-content > div.vzb-probe-container > input"));
		searchBar.click();
		browser.sleep(1000);
		
		// Getting text from probeline search bar
		searchBar.getAttribute('value').then(function (searchBarIntro) {
		var searchBarText = searchBarIntro;
		console.log(searchBarText);
		
		// Comparing value of probline search bar
		peakVal = "1.93";
		downVal = "1.64";
		expect(peakVal).toBeGreaterThan(searchBarText);
		expect(downVal).toBeLessThan(searchBarText);
			
		// Clicking Option pop up OK
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons > div")).click();
		browser.sleep(1000);
		
		// Clicking Stack
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(3) > span.vzb-buttonlist-btn-icon.fa > svg")).click();
		browser.sleep(1000);
		
		// Clicking the world radio button
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-active.notransition.vzb-popup > div > div.vzb-dialog-content.vzb-dialog-scrollable > form.vzb-howtomerge.vzb-dialog-paragraph > label:nth-child(4) > input[type=radio]")).click();
		browser.sleep(1000);
		
		// Clicking stack pop up OK
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons > div")).click();
		browser.sleep(1000);
		
		//Clicking the curve of mountain
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-mountains")).click();
		browser.sleep(1000);
		
		// Getting atrributes of population
		var worldBall = element(by.css("#all-label > text:nth-child(3)"));
		worldBall.getText().then(function (worldBallIntro) {
		var worldBallText = worldBallIntro;
		console.log(worldBallText);
		
		// Comparing the Check box country with selected country on the chart
		var subStr = worldBallText.substring(7, 11);
		console.log(subStr);
		var pop = "7.3B";
		expect(subStr).toBe(pop);		
	
});	
});	
});
});	
});
});	
});	

	

/////////////////////////////////////////////////////////////////////////////////////////////////////////////	

	/*
	 * Uncheck the countries from "show", when the last one is unchecked, the
	 * picture should return to a default view = stacked shapes of all countries
	 */

	it('uncheckMountain', function() {
		browser.get(baseUrl + "/tools/mountain");		
		browser.sleep(15000);
		
		//Clicking Show icon
		var showIcon = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(4) > span.vzb-buttonlist-btn-icon.fa"));
		showIcon.click();
		browser.sleep(1000);
	 	
		//Clicking check box of Afghanistan
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(2) > label")).click();
		browser.sleep(1000);
		
		//Clicking check box of Algeria
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(6) > label")).click();
		browser.sleep(1000);
		
		//Clicking OK of show pop up
		var ok = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons > div.vzb-dialog-button.vzb-label-primary"));
		ok.click();
		browser.sleep(1000);
		
		//Clicking Show icon to uncheck the country
		showIcon.click();
		browser.sleep(1000);
		
		//Unchecking Afghanistan
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(2) > label")).click();
		browser.sleep(1000);
		
		//Unchecking Algeria
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(6) > label")).click();
		browser.sleep(1000);
				
		//Clicking OK of show pop up
		ok.click();
		browser.sleep(100);							
						
		//Clicking find
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(2) > span.vzb-buttonlist-btn-icon.fa")).click();
		browser.sleep(1000);
		
		//Clicking Search bar of find
		var search = browser.element(by.css("#vzb-find-search"));
		browser.sleep(1000);
		
		//Entering China to searchbar
		search.sendKeys("china");
		browser.sleep(1000);
		
		// Check China Text Box 
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(30) > label")).click();
		browser.sleep(1000);
		
		
		//Getting China Terxt from check box field
		var chinaCheckBox = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(30)"));				
		chinaCheckBox.getText().then(function (chinaCheckBoxTextIntro) {
		var chinaCheckBoxText = chinaCheckBoxTextIntro;
		console.log(chinaCheckBoxText);
		browser.sleep(1000);
		
		//Getting China Terxt from population		
		var chinaBall = element(by.css("#chn-label > text:nth-child(3)"));
		chinaBall.getText().then(function (chinaBallIntro) {
		var chinaBallText = chinaBallIntro;
		console.log(chinaBallText);
		browser.sleep(1000);		
		
		//Getting country name from population
		var subStrChn = chinaBallText.substring(0, 5);
		console.log(subStrChn);
						
		//Removing text
		search.clear();
		browser.sleep(1000);
		
		//Entering USA to searchbar
		search.sendKeys("united states");
		browser.sleep(1000);
		
		//Clicking check box of USA
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(157) > label")).click();
		browser.sleep(1000);
		
		//Getting USA Text from check box field
		var usaCheckBoxText = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(157)"));				
		usaCheckBoxText.getText().then(function (USACheckBoxTextIntro) {
		var USACheckBoxText = USACheckBoxTextIntro;
		console.log(USACheckBoxText);
		
		
		//Getting USA Text from population
		var usaBall = browser.element(by.css("#usa-label > text:nth-child(3)"));		
		usaBall.getText().then(function (usaBallIntro) {
		var usaBallText = usaBallIntro;
		console.log(usaBallText);
		
		
		//Getting country name from population
		var subStrUSA = usaBallText.substring(0, 13);
		console.log(subStrUSA);		
		browser.sleep(1000);
		
		
		//Comparing China country name
		expect(subStrChn).toBe(chinaCheckBoxText);
		
		//Comparing USA country name
		expect(subStrUSA).toBe(USACheckBoxText);	
								
});
});
});
});
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*
	 * In 2015 there is roughly the same amount of people living in the extreme
	 * poverty as there was in 1800 (827 and 812 Millions). Hover the X Axis to
	 * check the number of people.
	 */

	 
	 
	 it('povertyPopulation', function() {
		browser.get(baseUrl + "/tools/mountain");		
		browser.sleep(20000);


		// Getting year's 1st digit  at 2015
		var firstDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(1)"));
		firstDigit.getText().then(function (firstDigitIntro) {
		var firstDigitText = firstDigitIntro;
		console.log(firstDigitText);
		
		// Comparing the year's 1st digit
		var val1= "2";
		expect(firstDigitText).toBe(val1);
		
		
		// Getting year's 2nd digit at 2015
		var secondDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(2)"));
		secondDigit.getText().then(function (secondDigitIntro) {
		var secondDigitText = secondDigitIntro;
		console.log(secondDigitText);
		
		// Comparing the year's 2nd digit
		var val2= "0";
		expect(secondDigitText).toBe(val2);
		
		
		// Getting year's 3rd digit at 2015
		var thirdDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(3)"));
		thirdDigit.getText().then(function (thirdDigitIntro) {
		var thirdDigitText = thirdDigitIntro;
		console.log(thirdDigitText);
		
		// Comparing the year's 3rd digit
		var val3= "1";
		expect(thirdDigitText).toBe(val3);
		
		
		// Getting year's 4th digit at 2015
		var fourthDigit = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-year > text:nth-child(4)"));	
		fourthDigit.getText().then(function (fourthDigitIntro) {
		var fourthDigitText = fourthDigitIntro;
		console.log(fourthDigitText);
		
		// Comparing the year's 4th digit
		var val4= "5";
		expect(fourthDigitText).toBe(val4);

		
		// Hovering the poverty line at default place at 2015
		var axis = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > rect"));
		browser.actions().mouseMove(axis,{x:371,y:1}).perform();
		browser.sleep(3000);

		// Getting attributes of poverty line at 2015
		var line = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > g.vzb-mc-probe"));
		line.getText().then(function (lineIntro) {
		var lineText = lineIntro;
		console.log(lineText);
		browser.sleep(3000);
		
		//Getting population at 2015
		var subStr = lineText.substring(12, 16);
		console.log(subStr);		
		browser.sleep(1000);
		
		// Comparing the population at 2015
		var findMe = "827M";
		expect(findMe).toBe(subStr);	
		
		// Drag the Slider ball to 1800
		var circle = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-timeslider > div > div.vzb-ts-slider-wrapper > svg.vzb-ts-slider > g > g.vzb-ts-slider-slide > circle"));
		browser.actions().dragAndDrop(circle,{x:-1200,y:0}).perform();
		browser.sleep(3000);
		
		
		// Getting year's 1st digit  at 1800
		firstDigit.getText().then(function (firstDigitIntro) {
		var firstDigitText = firstDigitIntro;
		console.log(firstDigitText);
		
		// Comparing the year's 1st digit
		var val11= "1";
		expect(firstDigitText).toBe(val11);
		
		
		// Getting year's 2nd digit at 1800
		secondDigit.getText().then(function (secondDigitIntro) {
		var secondDigitText = secondDigitIntro;
		console.log(secondDigitText);
		
		// Comparing the year's 2nd digit
		var val21= "8";
		expect(secondDigitText).toBe(val21);
		
		
		// Getting year's 3rd digit at 1800
		thirdDigit.getText().then(function (thirdDigitIntro) {
		var thirdDigitText = thirdDigitIntro;
		console.log(thirdDigitText);
		
		// Comparing the year's 3rd digit
		var val31= "0";
		expect(thirdDigitText).toBe(val31);
		
		
		// Getting year's 4th digit at 1800
		fourthDigit.getText().then(function (fourthDigitIntro) {
		var fourthDigitText = fourthDigitIntro;
		console.log(fourthDigitText);
		
		// Comparing the year's 4th digit
		var val41= "0";
		expect(fourthDigitText).toBe(val41);
		
		// Hovering the poverty line at 1800
		browser.actions().mouseMove(axis,{x:371,y:1}).perform();
		browser.sleep(1000);
		
		
		// Getting attributes of poverty line at 1800
		line.getText().then(function (lineIntro1) {
		var lineText1 = lineIntro1;
		console.log(lineText1);
		browser.sleep(3000);
		
		//Getting population at 1800
		var subStr1 = lineText1.substring(12, 16);
		console.log(subStr1);		
		browser.sleep(1000);
		
		// Comparing the population at 1800
		var findMe = "812M";
		expect(findMe).toBe(subStr1);	
		
		
});
});
});
});
});
});
});
});
});
});
});

	
	
	
	
	
	
	
	
	
			//*****************************BUBBLE MAP*************************************
			
			
			
			
			
	/*
	 * I can select and deselect countries using the button "Find" to the right.
	 */
	
	//@Test
	//public void findMap() throws InterruptedException {

		// Bubble Map Chart Loading
		
	
	it('findmap',function(){
		
		
		browser.get(baseUrl + "/tools/map");
		browser.sleep(10000);
		var find =element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(2) > span.vzb-buttonlist-btn-icon.fa"));
		find.click();
		browser.sleep(3000);

		var placetext =element(by.css("#vzb-find-search"));
		placetext.sendKeys("china");
		browser.sleep(3000);

		// Check China Text Box
		var chinabubble =element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(42) > label"));
		chinabubble.click();
		browser.sleep(3000);

		// Remove Text
		placetext.clear();
		browser.sleep(3000);

		// Place Text in Search / Find Field
		var placetext2 =element(by.css("#vzb-find-search"));
		placetext2.sendKeys("united states");
		browser.sleep(3000);

		// Check United States Text Box
		var USAbubble =element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-content-fixed.vzb-dialog-scrollable > div > div:nth-child(217) > label"));
		USAbubble.click();
		browser.sleep(3000);

		// Remove Text
		placetext2.clear();
		browser.sleep(3000);

		var ok =element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons > div.vzb-dialog-button.vzb-label-primary > span"));
		ok.click();
		browser.sleep(3000);

		// Getting USA opacity value
		var USA =element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
		USA.getCssValue('opacity').then(function(USAopacity1){
		var USAopacity = USAopacity1;
		console.log(USAopacity);
		browser.sleep(3000);
		
		
		
		// Getting Nigeria Opacity value
		var nga =element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(7)"));
		nga.getCssValue('opacity').then(function(NGAopacity1){
		var NGAopacity = NGAopacity1;
		console.log(NGAopacity);
		browser.sleep(3000);
	
		
		

		// Comapring Opacities
	 expect(NGAopacity).toBeLessThan(USAopacity);
		});
		
		});
		});
		
	
	
					//**************************************************************************
	
	
	
	/*
	 * User can hover the bubbles with a cursor, the bubbles react to hovering
	 * and a tooltip appears, and contains the country name.
	 */
	
	
	
	
	
	//@Test
//	public void hoverTooltipMap() throws Exception {

		
		it('USAhoverMap', function(){
		
		browser.get(baseUrl + "/tools/map");
		browser.sleep(10000);
			// Hovering the China Bubble
		var china = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(1)"));
		browser.actions().mouseMove(china).perform();
		browser.sleep(3000);
		var findMe = "China";
		// Getting attributes of Tooltip
		var tooltip = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-tooltip"));
		tooltip.getText().then(function (tooltipIntro) {
		var tooltipText = tooltipIntro;
		console.log(tooltipText);
		browser.sleep(3000);
		
		// Comparing the country name
		
		expect(tooltipText).toBe(findMe);

			
			});
		});
		
		

	
			//*****************************************************************
			
			
			
	/*
	 * Clicking the bubble of the United States should select it. The bubble
	 * gets full opacity, while the other bubbles get lower opacity.
	 */
	

	
	
//	@Test
	//public void selectAndOpacityMap() throws Exception {

		// Bubble Map Chart Loading
		
	it('opacityMap',function(){
		
		
		browser.get(baseUrl + "/tools/map");

		
		browser.sleep(10000);
		console.log("Chart Loaded");

		// Clicking the bubble of USA
		var USAbubble = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
		
		USAbubble.click();
		browser.sleep(4000);

		// Clicking option button
		var option = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(4) > span.vzb-buttonlist-btn-icon.fa"));
		option.click();
		browser.sleep(3000);

		// Clicking Opacity
		var opacity = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content.vzb-dialog-scrollable.vzb-accordion > div:nth-child(1) > div > div.vzb-dialog-title"));
		opacity.click();
		browser.sleep(3000);
		
		// Getting USA opacity value
		var USA = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
		
		USA.getCssValue('opacity').then(function(USAopacity1){
		var USAopacity=USAopacity1;
		console.log(USAopacity);
		
		var OK = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons"));
		OK.click();
		
		
		

		// Getting Nigeria Opacity value
		var nga = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(7)"));
		nga.getCssValue('opacity').then(function(ngaopacity1){
		var ngaopacity=ngaopacity1;
		console.log(ngaopacity);
		
		


		
		//Clicking OK
		
		expect(USAopacity).not.toEqual(ngaopacity);
		
		console.log("**Test Pass**");
		browser.sleep(3000);

	
		});
		});
	
	});
	
	
	
	
				//*********************************************************************************************


	/*
	 * I can drag the label "United States" and drop it anywhere in the chart
	 * area
	 */
	


//	@Test
	//public void DragTooltipMap() throws Exception {

		// Bubble Map Chart Loading
	
	it('DragLabelMap', function(){
		
		browser.get(baseUrl + "/tools/map");
		
		browser.sleep(10000);
		var USAbubble =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
		//browser.actions().dragAndDrop(USAbubble, {x: 0, y: -15}).click().perform();
		USAbubble.click();
		browser.sleep(3000);
		var USAlabel =element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-labels > g > rect"));
		//hover.moveToElement(USAbubble).moveByOffset(0, -20).click().perform();
		
		browser.sleep(5000);
		console.log("dragged");
		
		 // label drag and drop
		// var USALabel =element(by.css(
	   // "#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg > g > svg.vzb-bc-bubbles-crop > g.vzb-bc-labels"));

		
		
		USAlabel.getLocation().then(function(initiallocation){
			var inilocation = initiallocation.x;
		console.log(inilocation);
		
		browser.sleep(3000);
		browser.actions().dragAndDrop(USAlabel, {x: -100, y: -100}).click().perform();
		browser.sleep(3000);
		
		
		USAlabel.getLocation().then(function(finallocation){
			var finlocation = finallocation.x;
		console.log(finlocation);
		
		expect(inilocation).not.toEqual(finallocation);
		
			
		});

		});
		});		
	
	
					///////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	/*
	 * I can unselect the bubble by clicking on the "x" of the label
	 * "United States", or by clicking on the bubble
	 */
	
	
	
	//@Test
	//public void unselectMap() throws Exception {

		// Bubble Map Chart Loading
	

	it('crossLabelMap',function(){
		
		
		browser.get(baseUrl + "/tools/map");
		
		browser.sleep(10000);
		console.log("Chart Loaded");

	


		// Hovering the US bubble
		var USAbubble = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
		
		//browser.actions().mouseMove(axis,{x:371,y:1}).perform();
		//browser.actions().dragAndDrop(USAbubble,{x:0,y:-}).click().perform();
		USAbubble.click();
		
		browser.sleep(4000);

		
		
		var label1= element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-labels > g > rect"));
			
			
		browser.actions().mouseMove(label1).perform();	
		browser.sleep(4000);
		
		
		
		// Unselect country by click
		var cross = element(by.css(
				"#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-labels > g > g"));
		
		browser.actions().mouseMove(cross).click().perform();	
		
		browser.sleep(3000);
		//cross.click();
		console.log("Bubble is unselected by clickin 'x' on tooltip\n**Test Pass**");
	browser.sleep(3000);
	});
	
	
		
		//********************************************************************************************
		
	
	/*
	 * bubbles react on hover
	 */
	 
	 it('BubbleMapHover', function() {
		browser.get(baseUrl + "/tools/map");		
		browser.sleep(10000);
		
		// Hovering the China Bubble
		var china = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(1)"));
		browser.actions().mouseMove(china).perform();
		browser.sleep(3000);
		var findMe = "China";
		// Getting attributes of Tooltip
		var tooltip = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-tooltip"));
		tooltip.getText().then(function (tooltipIntro) {
		var tooltipText = tooltipIntro;
		console.log(tooltipText);
		browser.sleep(3000);
		
		// Comparing the country name
		
		expect(tooltipText).toBe(findMe);

});
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*
	 * The bubbles change size with timeslider drag and play
	 */

	it('BubbleMapdrag', function() {
		browser.get(baseUrl + "/tools/map");		
		browser.sleep(10000);
		
		//USA bubble element
		var USA = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
	
		//Bubble size before play
		USA.getCssValue("r").then(function (USAIntro) {
		var heightBefore = USAIntro;
		console.log("Bubble Size before play ");
		console.log(heightBefore);
		browser.sleep(1000);
		
		//Clicking play
		var play = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-play.vzb-ts-btn > svg"));
		play.click();
		browser.sleep(5000);
		
		//Clicking pause
		var pause = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-timeslider > div > div.vzb-ts-btns > button.vzb-ts-btn-pause.vzb-ts-btn > svg"));
		pause.click();									
		browser.sleep(3000);
		
		//Bubble size after play
		USA.getCssValue("r").then(function (USAIntro1) {
		var heightAfter = USAIntro1;
		console.log("Bubble size after play");
		console.log(heightAfter);
		browser.sleep(1000);
		
		//Comparing sizes
		//expect(heightBefore).toBeGreaterThan(heightAfter);		
		
		//Getting the location of slider ball before darg
		slider.getLocation().then(function (sliderIntro) {
		var positionBefore = sliderIntro.x;
		console.log(positionBefore);
		browser.sleep(1000);
		
		//Dragging the slider ball
		browser.actions().dragAndDrop(slider,{x:500,y:0}).perform();
		browser.sleep(3000);

		//Getting the location of slider ball after drag
		slider.getLocation().then(function (sliderIntro1) {
		var positionAfter = sliderIntro1.x;
		console.log(positionAfter);
		browser.sleep(1000);
		
		//Comparing slider position
		expect(positionBefore).not.toEqual(positionAfter);
		
		
		play.click();
		browser.sleep(5000);		
});
});
});
});
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*
	 * the size is according to the scale
	 */

	it('scale', function() {
		browser.get(baseUrl + "/tools/map");		
		browser.sleep(10000);
		
		//USA bubble element
		var USA = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
	
		// Clicking size icon
		var size = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-buttonlist > button:nth-child(3) > span.vzb-buttonlist-btn-icon.fa"));
		size.click();
		browser.sleep(1000);
			
		
		//Bubble size before dargging
		USA.getSize().then(function (USAIntro) {
		var heightBefore = USAIntro.height;
		console.log(heightBefore);
		browser.sleep(4000);
		
		// dargging minimum pointer to the maximum
		var slider = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-content > div > div > svg > g > g > g.resize.w.vzb-bs-slider-thumb > g"));
		browser.actions().dragAndDrop(slider,{x:100,y:0}).perform();
		browser.sleep(1000);
		
		//Bubble size after dargging
		USA.getSize().then(function (USAIntro1) {
		var heightAfter = USAIntro1.height;
		console.log(heightAfter);
		browser.sleep(1000);
		
		//clicking OK 
		browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-sidebar > div.vzb-tool-dialogs > div.vzb-top-dialog.vzb-dialogs-dialog.vzb-dialog-shadow.vzb-popup.vzb-active.notransition > div > div.vzb-dialog-buttons")).click();
		browser.sleep(3000);
		
		//Comparing sizes
		expect(heightBefore).toBeLessThan(heightAfter);

});
});
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*
	 * While hovering, the chart title changes to show the exact values.
	 */
	 
	it('hoverValueMap', function() {
		browser.get(baseUrl + "/tools/map");		
		browser.sleep(10000);
		
		//Hovering USA bubble element
		var USA = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-bubbles > circle:nth-child(3)"));
		browser.actions().mouseMove(USA).perform();
		browser.sleep(3000);
		
		// Getting attributes of population
		var population = browser.element(by.css("#vizabi-placeholder > div > div.vzb-tool-stage > div.vzb-tool-viz > div > svg.vzb-bubblemap-svg > g > g.vzb-bmc-axis-y-title"));
		population.getText().then(function (populationIntro) {
		var populationText = populationIntro;
		console.log(populationText);
		browser.sleep(3000);
		
	
		// Comparing the population
		var findMe = "322M";
		var million = populationText.substring(6, 10);
		console.log(million);
		expect(findMe).toBe(million);
	
});
});

});

				