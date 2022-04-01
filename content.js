scriptURL = chrome.runtime.getURL("main.js")

function init() {
    gameElement = document.querySelector("body > game-app").shadowRoot.querySelector("#game")


    injectScript = document.createElement("script")
    injectScript.setAttribute("type", "text/javascript")
    injectScript.setAttribute("src", scriptURL)
    document.body.appendChild(injectScript)

    helper = document.createElement("div")
    helper.className = "helper-block"
    helper.innerHTML = `
    <style>
    .helper-block {
        position: absolute;
        margin: 15px;
    }
    
    .helper-block button {
        font-weight: bold;
        border: 0;
        padding: 5px;
        margin: 0;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #suggestion {
        margin: 8px 5px;
    }

    .helper-suggested-word {
        font-weight: bold;
        text-transform: uppercase;
    }

    .helper-try-button-wrapper {
        margin-left: 10px;
    }
    </style>

    <button class="helper-suggest-button" onclick="giveSuggestion()">Suggest the next word</button>
    <div id="suggestion"></div>
    `
    gameElement.parentNode.insertBefore(helper, gameElement)
}

init()
  