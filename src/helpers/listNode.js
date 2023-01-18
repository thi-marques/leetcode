/**
 * Definition for singly-linked list.
 * @template {ListNode | undefined} T
 * @class
 * @param {number} val
 * @param {T} next
 */
export function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	/** @type {T extends undefined ? null : ListNode<T>} */
	this.next = next === undefined ? null : next
}

/**
 * Create a ListNode from an array
 * @param {number[]} array
 * @returns {ListNode}
 */
export function arrayToListNode(array) {
	const reduceListNode = (listNode, val) => new ListNode(val, listNode)
	return array.reduceRight(reduceListNode, undefined)
}

/**
 * Create a array from a ListNode
 * @param {ListNode} listNode
 * @return {number[]}
 */
export function listNodeToArray(listNode) {
	const array = [listNode.val]
	while (listNode.next) {
		listNode = listNode.next
		array.push(listNode.val)
	}

	return array
}