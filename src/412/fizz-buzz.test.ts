import { describe, test, expect } from 'vitest'
import { fizzBuzz } from './fizz-buzz'

describe('Fizz Buzz', () => {
	test('should return result', () => {
		const result = [
			'1',
			'2',
			'Fizz',
			'4',
			'Buzz',
			'Fizz',
			'7',
			'8',
			'Fizz',
			'Buzz',
			'11',
			'Fizz',
			'13',
			'14',
			'FizzBuzz',
		]

		expect(fizzBuzz(15)).toEqual(result)
	})
})
