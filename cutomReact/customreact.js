

function customRender(element, container) {
    // let domElement = document.createElement(element.type)
    // domElement.innerHTML = element.children
    // domElement.setAttribute('href', element.props.href)
    // domElement.setAttribute('target', element.props.target)

    // container.appendChild(domElement)


    let domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'http://www.react.dev',
        target: '_blank'
    },
    children: 'Click to visit react docs'
}





const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)