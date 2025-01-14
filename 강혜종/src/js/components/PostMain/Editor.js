import { $creEle } from "../../utils/document.js"

export default function Editor({
    $target,
    initialState =
    {
        title: '',
        content: ''
    },
    onEditing
}) {
    const $editor = $creEle('div')

    $editor.innerHTML = `
        <input type="text" class="editorTitle" name="title" /><br>
        <div name="content" class="editorContent" contentEditable="true" "></div>
    `

    $target.appendChild($editor)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }
    
    this.render = () => {
        $editor.querySelector(`[name="title"]`).value = `${this.state.title}`
        $editor.querySelector(`[name="content"]`).innerHTML = `${this.state.content === null ? '' : this.state.content}`
    }

    this.render()

    // this.render = () => {
    //     const richContent = this.state.content.split(`\n`).map(line => {
    //         if (line.indexOf('# ') === 0) {
    //             return `<h1>${line.substr(2)}</h1>`
    //         } else if (line.indexOf('## ') === 0) {
    //             return `<h2>${line.substr(3)}</h2>`
    //         } else if (line.indexOf('### ') === 0) {
    //             return `<h3>${line.substr(4)}</h3>`
    //         }
    //         return line
    //     }).join('<br>')

    //     $editor.querySelector('[name=title]').value = this.state.title
    //     $editor.querySelector('[name=content]').innerHTML = richContent

    // }

    // this.render()

    // $editor.querySelector('[name=title]').addEventListener('keyup', e => {
    //     const nextState = {
    //         ...this.state,
    //         title: e.target
    //     }

    //     this.setState(nextState)
    //     onEditing(this.state)

    // })

    // $editor.querySelector('[name=content').addEventListener('input', e => {
    //     const nextState = {
    //         ...this.state,
    //         content: e.target.innerHTML
    //     }
    //     this.setState(nextState)
    // })
}