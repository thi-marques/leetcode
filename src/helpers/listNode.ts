/**
 * Definition for singly-linked list.
 */
export class ListNode {
	val: number
	next: ListNode | null
	constructor(val: number, next?: ListNode) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

/**
 * Create a ListNode from an array
 */
export function arrayToListNode(array: number[]): ListNode {
	const reduceListNode = (listNode: ListNode | undefined, val: number) => new ListNode(val, listNode)		
	
	return array.reduceRight(reduceListNode, undefined) as any as ListNode
}

/**
 * Create a array from a ListNode
 */
export function listNodeToArray(listNode: ListNode): number[] {
	const array = [listNode.val]
	while (listNode.next) {
		listNode = listNode.next
		array.push(listNode.val)
	}

	return array
}

