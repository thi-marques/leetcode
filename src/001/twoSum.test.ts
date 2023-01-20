import { describe, test, expect } from 'vitest'
import { twoSum } from './twoSum'

describe('Case1', () => {
	test('Case1', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
	})
})
