import { describe, expect, test } from 'vitest'
import { arrayToListNode } from '../helpers/listNode'
import { isPalindrome } from './palindrome-linked-list'

describe('palindrome-linked-list', () => {
	test('palidrome', () => {
		const test = arrayToListNode([1, 2, 2, 1])
		expect(isPalindrome(test)).toBe(true)
	})

	test('palidrome odd number of itens', () => {
		const test = arrayToListNode([1, 2, 4, 2, 1])
		expect(isPalindrome(test)).toBe(true)
	})

	test('not palidrome', () => {
		const test = arrayToListNode([1, 2])
		expect(isPalindrome(test)).toBe(false)
	})
})
