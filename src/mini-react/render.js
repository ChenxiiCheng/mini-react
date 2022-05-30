function render(element, container) {
	if (!element.type) {
		return;
	}

	const dom =
		element.type === 'TEXT_ELEMENT'
			? document.createTextNode('')
			: document.createElement(element.type);

	// add properties
	Object.keys(element.props)
		.filter((key) => key !== 'children')
		.forEach((name) => (dom[name] = element.props[name]));

	// add children
	element.props.children.map((child) => render(child, dom));

	container.appendChild(dom);
}

export default render;
