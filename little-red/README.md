# Little Red Riding Hood: Screen Version
### A Digital Fairy Tale on the Phone Screen

A classic fairy tale retold through a simulated smartphone interface. 
Messages, maps, and notifications replace the wolf, turning everyday digital habits into a source of tension and danger.

## Abstract

This project adapts *Little Red Riding Hood* into an interactive web-based narrative experienced entirely through a simulated smartphone screen. The familiar fairy tale is placed into contemporary digital life in the form of chat messages, social feeds, location navigating, and system notifications. Instead of a wolf lurking in the forest, the danger emerges through the phone itself with persistent messages, invasive tracking, and unsettling alerts that slowly erode the sense of safety.

The guiding idea of creating this version is to reflect on a generation deeply obssessed with screens and often ignoring parental advice and physical reality in favor of digital connection. By using the web as both medium and message, this project attempts to immerse the viewer in a progression from warmth and familiarity to fear and darkness (with a bad ending) and encourage reflection on how digital dependence can quietly transform everyday tools into sources of real-world risk.


## Preview

![Messages from mom](messagespage.png)   
*Reply to chat messages from mom!*

![Social media posts? Dangerous!](mediapage.png)  
*Happy forest vibes? Don’t click too carelessly!*

# Adaptation Process  
### Source

My adaptation is based on the fairy tale *Little Red Riding Hood*. Instead of retelling the story literally, I focused on its underlying themes of vulnerability, surveillance, and danger disguised as familiarity. In the original tale, the wolf observes, follows, and deceives Little Red Riding Hood. In my version, I translated the physical story into a contemporary digital context, where threats are mediated through mobile interfaces and constant connectivity.

---

### What I Chose to Reinterpret

- Rather than adapting the narrative as a linear journey through a forest, I fragmented the story into everyday phone interactions. Little Red's process of walking in the forest was mostly shown in a series of digital spaces: a lock screen, a messaging app, location tracking, social media, and a notes application instead of physical ones (though there are also changes in background that reflects her process of walking).

- The wolf no longer appears as a physical character. Instead, it exists as an anonymous and subtle presence appearing only in the corners of Little Red's selfies on her social media post. By removing a visible antagonist, I aimed to make the danger feel ambient and unavoidable to reflect how digital threats often operate without clear identity or location.

---

### Shaping Narrative Through Browser Affordances

The narrative is shaped primarily through the affordances of the browser, especially scrolling, timing, sound, and reveal or hide mechanics.

- Scrolling helps discovery and enhances interaction, as it allows the users to discover the location of grandma's house themselves and navigate there and see Little Red's notes of what to bring to grandma's house (and then suddenly discover that she is in danger and eaten by the wolf).
- Timing is used to make the phone system more similar to the real interface, with the actual time displayed on the phone screen, delayed message arrivals from mum after sending out a message, phone shaking to find the right direction to go for a while, and automatic updates that occur without the user's input.
- Sound is also used to mimic the real phone interface and immerse the user better in the story with the unlocking sound, incoming message sound, message sending sound and alert sound.
- Reveal and hide techniques such as the hidden place of grandma's house in the map, lists gradually appearing as the user scroll down the phone interface reinforce the user's experience of the real story and better immerse them in Little Red's perspective, experiencing fun and danger with her together on the phone.

Rather than relying on traditional plot development, the story allows more interaction and creates fun, engagement and suspense through interface behavior.

---

### Structure, Sequence, and Interaction

The project follows a structure that moves from familiarity to breakdown:

- Lock Screen establishes warmth and recognizability through a familiar phone interface and encourages the user to interact with the phone.
- Mainpage allows the user to discover the story themselves rather than passively accepting the story, as they have to click on the icon to view messages (and also other stages, but messages icon is preferred).
- Messages introduces relationships and the first sign of danger (as Little Red didn't follow her mother's advice and take the forest road instead of the main road).
- Find My visualizes proximity with the location of grandma's house and its distance from Little Red's standing point to be found.
- Instagram Feed transforms danger into a public, social experience and invites the user to discover the wolf, which lays the foundation for the presence of the wolf and Little Red's being eaten by it. 
- Notes shifts inward, not only staying true to the original story by disclosing what Little Red brings to grandma's house but also revealing anxiety and psychological instability with Little Red discovering the presence of the wolf and trying to ask for help.
- Final Page with the phone out of battery on the ground concludes with technological failure and disappearance, and leaves a lesson to be leanrned from the story.

Interaction is intuitive, relying on gestures such as scrolling, typing and tapping. These interactions mirror everyday phone use, which makes the reader complicit in the narrative and reinforces the sense of immersion.

---

### Expanding the Meaning of the Original Story

By translating *Little Red Riding Hood* into a mobile interface, the story’s meaning shifts from physical danger in a forest to digital vulnerability in a networked environment. The forest is no longer distant or external, it is embedded in systems of tracking, sharing, and constant visibility.

The ending rejects the traditional rescue narrative. Instead of safety or resolution, the story ends with a loss of connection, a black screen, and Little Red eaten up by the wolf, which reflects contemporary anxieties surrounding digital disappearance, exposure, and the fragility of connectivity and reveals bad consequences of obssessive phone use.

---

### Reflection on Design Principles

This project draws on Gestalt principles, particularly similarity and continuity, by using recognizable mobile UI patterns. Because users can quickly perceive these interfaces as coherent wholes, subtle disruptions such as screen shaking, color shifts from normal to red (in the notes page), alert sounds, or battery run-out become more unsettling.

The work is intentionally medium-aware, drawing on McLuhan’s idea that the medium itself shapes meaning. The phone interface is not merely a container for the narrative but functions as the narrative logic of the story. Each interface (lock screen, messages, location tracking, social media, and notes) determines what can be seen, when it appears, and how the reader is allowed to interact. As the story progresses, these interfaces begin to behave unpredictably: words turn from black to red, location disappears and blood appears on the screen. In these moments, the phone is not just a neutral tool, but is an active agent that mediates power, visibility, and control.

Rhythm also plays a central role in guiding the reader’s emotional experience. The story moves from warmth to darkness through a controlled escalation of pacing and disruption. Early screens are slow, clear, and familiar, allowing the reader time to settle into the interface. Later pages introduce visual noise and forced transitions that reduce the reader’s sense of agency. Rather than relying on explicit narrative explanation, I tried to use changes in tempo, clarity, and user control to communicate fear and instability to allow emotion to emerge through interaction rather than description.

# Technical Process

### HTML Structure

The project is organized as a sequence of HTML files, each representing a different phone interface and a distinct narrative moment in the story. Every page uses the `<body>` class to signal its narrative role (e.g. `lockscreen`, `messages`, `map-page`, `notes`, `shutdown`), allowing layout and atmosphere to be controlled at the page level through CSS and avoids the latter ones overlapping with the ones in the former pages.

Within each page, the phone interface functions as the primary container of the narrative. Structurally, this is built around a `.phone` wrapper that holds a static phone image and multiple absolutely positioned interface elements layered on top of it, such as status bars, notifications, chat containers, maps, or notes. This approach treats the phone screen as a stage where different narrative units appear and disappear rather than as a traditional scrolling webpage.

Interactive zones are clearly separated:
- the phone body acts as the visual frame,
- interface overlays (messages, maps, notes) serve as narrative content,
- hidden elements are revealed progressively through user interaction or timed events.

This structure allows each page to feel like a single, focused interface state rather than a continuous document that the user can only passively watch.

---

### CSS Design Decisions

CSS plays a major role in establishing visual hierarchy and emotional tone. Absolute positioning is used extensively to align interface elements precisely within the phone image, reinforcing the illusion of a real mobile screen. Spacing and alignment are tightly controlled to match familiar mobile UI patterns, which helps users immediately recognize how to interact.

Key CSS decisions include:
- Visual hierarchy through font size, color contrast, and positioning such as large centered time display on the lock screen, chat bubbles aligned left or right in Messages.
- Hidden and revealed states implemented using a `.hidden` class with `display: none`, allowing JavaScript to control narrative progression.
- Animation and transitions, such as the `phoneShake` keyframe animation, blinking alerts, and opacity transitions in the Notes page, which introduce instability as the story darkens.
- Background images assigned at the body level to create environmental context while keeping the phone interface visually consistent across pages.

Overall, the CSS helps establish and mimic the real phone interface and supports a gradual shift from clarity and stability to disruption and loss of control.

---

### Example of Key Interactive Element: Timed Messaging and Forced Progression (Messages Page)

One significant dynamic element appears on the Messages page, where the chat conversation unfolds through a combination of user input, timed delays, and DOM manipulation. This interaction simulates a familiar texting experience while subtly removing the user’s agency.

#### Narrative Effect

The effect creates the illusion that the reader is actively participating in the conversation, even though the dialogue is predetermined. Messages appear in a controlled sequence, and the interface responds automatically: mom starts typing, replies arrive after delays, and the phone eventually begins to shake and transitions to the next page. This reinforces the theme of surveillance and inevitability: no matter what the user does, the story moves forward on its own terms.

#### Technical Logic

The main interaction is triggered by a click event on the Send button. On the first click, Red's initial message is revealed, a send sound is played, and the chat title changes to indicate that the mother is typing. This creates the illusion of a live and responsive conversation.

```javascript
if (red1Shown == false){
    red1.classList.remove("hidden");
    sendSound.play();
    red1Shown = true;
    chatTitle.textContent = "Mom typing...";
    chatTitle.classList.add("typing");
    input.value = "";
}

```
A ```setTimeout()``` function then delays the appearance of mother's reply. This delay mimics real messaging behavior while also removing control from the user, as the reply arrives automatically.

```javascript
setTimeout(function(){
    if(momReplyShown == false){
        momReply.classList.remove("hidden");
        sendSound.play();
        momReplyShown = true;
        chatTitle.textContent = "Mom 🩷";
        chatTitle.classList.remove("typing");
    }
}, 3000);

```
On the second click, Red's final message is revealed with the send sound played.

```javascript
else if (red1Shown && momReplyShown && !red2Shown){
    red2.classList.remove("hidden");
    sendSound.play();
    red2Shown = true;
}
```
Immediately after, the phone begins to shake and the interface transitions to the next page, marking a narrative shift from conversation to surveillance.The shake animation is followed by a forced page transition, triggered only after the animation completes.

```javascript
setTimeout(function () {
    phone.classList.add("shake");
    phone.addEventListener("animationend", function shakeDone() {
        window.location.href = "findmy.html";
    });
}, 3000);
```

The input is further controlled using a character counter, which simulates typing by gradually revealing a predefined message. This mechanism overrides free text input while preserving the gesture of typing.

```javascript
let currentMessage = "I won't, I promise!";
let counter = 1;
```

Each time the user types, the input event listener updates the visible text to display only the first counter characters of the scripted message.

```javascript
input.addEventListener("input", function(e){
    if(counter <= currentMessage.length){
        input.value = currentMessage.substring(0, counter);
    } else {
        input.value = currentMessage;
    }
    counter++;
});
```

This approach creates the illusion of agency: the user feels involved in composing the message, but the content remains fully predetermined.

Together, these technical mechanisms transform a familiar chat interface into a controlled storytelling system. True or false lags regulate narrative order, timers introduce anticipation and inevitability, and the counter-based typing simulation limits user agency while maintaining immersion.

Technically, the interaction combines event listeners, timed delays, animations, and DOM manipulation. It reinforces the project’s central theme that digital interfaces often feel personal and participatory, yet operate according to rules and systems that the user cannot see or control.

## Reflection and Future Development

The project evolved significantly from its initial concept to the final interactive web experience. At the outset, I envisioned a simple branching narrative presented through text, but after seeing the web projects in class, I realized that the web medium allowed for more immersive storytelling techniques. Introducing timed messaging, automated character responses, and controlled input fields enabled me to create a sense of agency while simultaneously guiding the reader through a predetermined narrative. This approach deepened the engagement and helped communicate themes of surveillance and inevitability, which were central to the story.

Through the project development process, I learned a great deal about the unique affordances of web-based storytelling. Unlike traditional linear narratives, the web allows for interaction, audio-visual cues, and timed events, all of which can manipulate pacing and reader perception. I discovered that even small details like a typing indicator, a sound effect, or a subtle page animation can enhance immersion and emotional impact. Balancing control and agency for the user was a key challenge: I wanted readers to feel involved without giving them full narrative control, and testing different methods like the incremental input counter and message delays taught me how to create this illusion effectively.

Several elements of the project I consider successful include the messaging interface, the timing of responses, choice of different phone platforms with distinct forms of interactions and the use of audio cues to reinforce the experience of the phone interface. Users frequently commented that the interaction felt ral and engaging, which suggested the approach achieved its intended effect. On the other hand, areas for improvement include expanding the range of possible interactions and providing more visual feedback for user choices. For example, additional branching paths (such as creating options like following mom's advice or not) or subtle changes in the background based on previous interactions (such as the change of the background gradually as if Little Red is actually navigating through the forest to grandma's house accompanying the shaking of the phone) could increase replayability and depth.

Feedback from peers and the instructor was instrumental in refining the project. Early testing highlighted moments where timing felt either too slow or too abrupt, and I adjusted the `setTimeout` delays and animation durations accordingly. Suggestions about clarifying the user's role and enhancing accessibility also influenced revisions, prompting me to improve labeling and ensure the interface remained intuitive. To be specific, I removed the chat with the wolf as my classmates said that the wolf shouldn't know how to type in real life and also removed the wolf's comments in the instagram page for the same reason. Instead, I hid the wolf subtly in the corners of the pictures in the post. Moreover, people feeling at a loss what to type for the password inspired me to add a front page introducing my project and the name of Little Red Riding Hood to help people fill the password. During the actual presentation, I received feedback for changing the last page from chalk-and-talk to the wolf's rating of the forest with delicious food in the wolf's web, which was very interesting and worth trying. Also, changing the sending of the message in instagram into an incoming message would make the narrative more coherent.

Looking beyond the class, this project has potential for further development into a more complex web-based narrative. Future enhancements could include multiple storylines, richer multimedia elements, or a more adaptive system that responds to user behavior. Additionally, integrating analytics could provide insight into how readers experience the story, which could inform both narrative design and interface improvements. Ultimately, this project serves as a foundation for exploring how interactive web technologies can reshape storytelling, and I am eager to continue experimenting with these techniques in future creative endeavors.

## Credits and References: 

### Sound Effects: 

Sound of phone unlock: https://www.aigei.com/item/shou_ji_jie_suo_25.html

Sound of incoming messsages：https://www.aigei.com/item/iphone_xiao_xi_1.html

Sound of sending out messages：https://www.aigei.com/item/ping_guo_shou_j_3298.html

Other sound effects are recorded using my own phone.
### Technical References:

#### CSS:

Blurring the background: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/blur*/

Making the elements occupy the rest of the screen and scrollable to make sure the input box is at the bottom: https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/flex

Making the speech bubble:https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Selectors/::after

#### Javascript:

Removing the autofill：:https://geek-docs.com/html/html-ask-answer/289_html_how_to_turn_off_html_input_form_field_suggestions.html#:~:text=autocomplete%20%E5%B1%9E%E6%80%A7%E7%9A%84%E5%80%BC%E4%B8%BA%20off%20%E6%97%B6%EF%BC%8C%E4%BC%9A%E5%91%8A%E8%AF%89%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8D%E8%A6%81%E6%8F%90%E4%BE%9B%E8%87%AA%E5%8A%A8%E5%BB%BA%E8%AE%AE%E3%80%82%20%E8%BF%99%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%BA%94%E7%94%A8%E4%BA%8E%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%A1%A8%E5%8D%95%E5%AD%97%E6%AE%B5%EF%BC%8C%E6%AF%94%E5%A6%82%E8%BE%93%E5%85%A5%E6%A1%86%E3%80%81%E5%AF%86%E7%A0%81%E6%A1%86%E7%AD%89%E3%80%82%20Firefox%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%20autocomplete,%E5%B1%9E%E6%80%A7%E6%9D%A5%E7%A6%81%E7%94%A8%E8%BE%93%E5%85%A5%E8%A1%A8%E5%8D%95%E5%AD%97%E6%AE%B5%E7%9A%84%E5%BB%BA%E8%AE%AE%EF%BC%8C%E4%B8%8EGoogle%20Chrome%E7%B1%BB%E4%BC%BC%E3%80%82%20%E5%90%8C%E6%A0%B7%E5%9C%B0%EF%BC%8C%E5%B0%86%20autocomplete%20%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%BA%20off%20%E5%8D%B3%E5%8F%AF%E5%85%B3%E9%97%AD%E5%BB%BA%E8%AE%AE%E3%80%82

Going to the next page upon click of the button: https://blog.csdn.net/weixin_42583683/article/details/144164586 (Section 3.3.1)

Removing extra spaces before or after the answer so that the answer will be interpreted as correct even with additional spaces: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-spacing-trim

Making the time appearing in two digits with leading zeros filling if it's only oen digit: https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript

Putting pictures in arrays so that with every click there's a change: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array & https://www.delftstack.com/zh/howto/javascript/javascript-array-of-images/

Click to cycle effect2: https://blog.csdn.net/weixin_46410264/article/details/105083507 

Getting the size and position of an element: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect









