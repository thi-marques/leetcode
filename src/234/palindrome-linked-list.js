import { arrayToListNode, ListNode } from '../helpers/listNode'

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// export function isPalindrome(head) {
// 	const array = [head.val]
// 	while (head.next) {
// 		head = head.next
// 		array.push(head.val)
// 	}

// 	for (let i = 0; i < array.length / 2; i++) {
// 		const first = array[i]
// 		const second = array.at(-i - 1)
// 		if (first !== second) return false
// 	}

// 	return true
// }

export function isPalindrome(head) {
	let slow = head,
		fast = head,
		prev = null,
		temp,
		slowBackwards = head
		prev = slow
		prev.next = null

	while (fast?.next) {
		slowBackwards.next = prev
		prev = slow

		slow = slow.next
		fast = fast.next.next
		
		slowBackwards = slow
  }
	return slowBackwards
  
	slow = slow.next

	while (slow) {
		temp = slow.next
		slow.next = prev
		prev = slow
		slow = temp
	}

	fast = head
	slow = prev

	while (slow) {
		if (fast.val !== slow.val) return false

		fast = fast.next
		slow = slow.next
	}

	return true
}

isPalindrome(arrayToListNode([1,2,3,4])) //?