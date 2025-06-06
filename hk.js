const puppeteer = require('puppeteer')
const codeObj = require('./codes')
const loginLink = 'https://www.hackerrank.com/auth/login'
const email = 'kaliasiya007@gmail.com'
const password ='RS@241317'

let browserOpen = puppeteer.launch({
    headless : false,
    args : ['--start-maximized'],
    defaultViewport:null
})

let page

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage()
    return browserOpenPromise;
}).then(function(newTab){
    page = newTab
    let hackerRankOpenPromise = newTab.goto(loginLink)
    return hackerRankOpenPromise
}).then(function(){
    let emailIsEntered = page.type("input[name='username']", email, {delay: 50})
    return emailIsEntered
}).then(function(){
    let passwordIsEntered = page.type("input[name='password']", password, {delay: 50})
    return passwordIsEntered
}).then(function(){
    let loginButtonClicked = page.click('.c-cUYkx-dshqME-variant-primary', {delay: 50})
    return loginButtonClicked
}).then(function(){
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page)
    return clickOnAlgoPromise
}).then(function(){
    let getToWarmUp = waitAndClick('input[value="warmup"]', page)
    return getToWarmUp
}).then(function(){
    let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', {delay: 50})
    return allChallengesPromise
}).then(function(questionArr){
    console.log('number of questions', questionArr.length)
    let questionWillBeSolved = questionSolver(page, questionArr[0], codeObj.answers[0])
    return questionWillBeSolved
}).catch(function(err){
    console.log("An error occurred:", err)
})

function waitAndClick(selector, cpage){
    return new Promise(function(resolve, reject){
        let waitForModelPromise = cpage.waitForSelector(selector)
        waitForModelPromise.then(function(){
            let clickModel = cpage.click(selector)
            return clickModel
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject(err)
        })
    })
}

function questionSolver(page, question , answer){
    return new Promise(function(resolve, reject){
        let questionWillBeClicked = question.click()
        questionWillBeClicked.then(function(){
            let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return EditorInFocusPromise
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject(err)
        }).then(function(){
            return waitAndClick('.checkBoxWrapper', page)
        }).then(function(){
            return page.waitForSelector('textarea.custominput', page)
        }).then(function(){
            return page.type('textarea.custominput', answer , {delay:10})
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control')
            return ctrlIsPressed
        }).then(function(){
            let AisPressed = page.keyboard.press('A',{delay:100})
            return AisPressed
        }).then(function(){
            let XisPressed = page.keyboard.press('X', {delay:100})
            return XisPressed
        }).then(function(){
            let CtrlisUnPressed = page.keyboard.up('Control')
            return CtrlisUnPressed
        }).then(function(){
            let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return mainEditorInFocus
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control')
            return ctrlIsPressed
        }).then(function(){
            let AisPressed = page.keyboard.press('A',{delay:100})
            return AisPressed
        }).then(function(){
            let VisPressed = page.keyboard.press('V',{delay:100})
            return VisPressed
        }).then(function(){
            let CtrlisUnPressed = page.keyboard.up('Control')
            return CtrlisUnPressed
        }).then(function(){
            return page.click('.hr-monaco__run-code', {delay:50})
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject();
        })
    })
}