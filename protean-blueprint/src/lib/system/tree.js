export function treeContains(node, root) {
	return treeRead(n => n?.uuid && n?.uuid === node.uuid, root) ? true : false;
};

export function treeCreate(node, root, parentUuid = null) {
	if (parentUuid) {
		parentUuid.content.push(node);
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
	let found = treeRead(n => n?.uuid && n?.uuid === node.uuid, root);
	if (found) {
		console.log("treeUpdate:found:" + found);
		console.log("treeUpdate:node:" + node);
		found = node;
	}
	else console.log("Cannot find node with uuid: " + node.uuid);
};

export function treeDelete(deletingNode, root) {
	if (root.uuid === deletingNode.uuid) {
		root = null;
	}

	let queue = [root];
	while (queue.length) {
		let node = queue.shift();
		for (let i = 0; i < node.content.length; i++) {
			if (node.content[i].uuid === deletingNode.uuid) {
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