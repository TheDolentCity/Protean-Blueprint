export function treeContains(node, root) {
	return treeRead(n => n?.id && n?.id === node.id, root) ? true : false;
};

export function treeCreate(node, root, parentId = null) {
	if (parentId) {
		parentId.content.push(node);
	}
	else {
		if (!root) {
			root = node;
		}
		else {
			root.content.push(node);
		}
	}
};

export function treeRead(fn, root) {
	let queue = [root];
	while (queue.length) {
		let node = queue.shift();
		if (fn && fn(node)) {
			return node;
		}
		for (let i = 0; i < node.content.length; i++) {
			queue.push(node.content[i]);
		}
	}
	return null;
};

export function treeUpdate(node, root) {
	let found = treeRead(n => n?.id && n?.id === node.id, root);
	if (found) {
		console.log("treeUpdate:found:" + JSON.stringify(found, null, 2));
		console.log("treeUpdate:node:" + JSON.stringify(node, null, 2));
		found = node;
	}
	else console.log("Cannot find node with id: " + node.id);
};

export function treeDelete(deletingNode, root) {
	if (root.id === deletingNode.id) {
		root = null;
	}

	let queue = [root];
	while (queue.length) {
		let node = queue.shift();
		for (let i = 0; i < node.content.length; i++) {
			if (node.content[i].id === deletingNode.id) {
				node.content.splice(i, 1);
			}
			else {
				queue.push(node.content[i]);
			}
		}
	}
};

export function treeTraverse(fn, root) {
	let queue = [root];
	while (queue.length) {
		let node = queue.shift();
		if (fn) {
			fn(node);
		}
		for (let i = 0; i < node.content.length; i++) {
			queue.push(node.content[i]);
		}
	}
};