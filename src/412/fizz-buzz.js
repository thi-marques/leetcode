/**
 * @param {number} i
 * @return {string[]}
 */
export function fizzBuzz(n) {
	const result = []
	let i = 1
	while (i <= n) {
		if (i % 15 === 0) result.push('FizzBuzz')
		else if (i % 3 === 0) result.push('Fizz')
		else if (i % 5 === 0) result.push('Buzz')
		else result.push(i.toString())

		i++
	}

	return result
}
