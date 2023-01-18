import { arrayToListNode, ListNode } from '../helpers/listNode'

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export function isPalindrome(head) {
	const array = [head.val]
	while (head.next) {
		head = head.next
		array.push(head.val)
	}

	for (let i = 0; i < array.length / 2; i++) {
		const first = array[i]
		const second = array.at(-i - 1)
		if (first !== second) return false
	}

	return true
}

/**
 * Fastest solution without using array
 * 
 * See full explanation on: {@link https://leetcode.com/problems/palindrome-linked-list/solutions/1137027/js-python-java-c-easy-floyd-s-reversal-solution-w-explanation/ LeetCode}
 * @param {ListNode} head 
 */
// export function isPalindrome(head) {
// 	let slow = head,
// 		fast = head,
// 		prev,
// 		temp

// 	while (fast?.next) {
// 		fast = fast.next.next
// 		slow = slow.next
// 	}

// 	prev = slow
// 	slow = slow.next
// 	prev.next = null

// 	while (slow) {
// 		temp = slow.next
// 		slow.next = prev
// 		prev = slow
// 		slow = temp
// 	}

// 	fast = head
// 	slow = prev

// 	while (slow) {
// 		if (fast.val !== slow.val) return false

// 		fast = fast.next
// 		slow = slow.next
// 	}

// 	return true
// }