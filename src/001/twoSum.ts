export function twoSum(nums: number[], target: number): number[] | null {
	const values: Record<number, number> = {}
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]
		const diff = target - num
		if (diff in values) return [values[diff], i]

		values[num] = i
	}
	return null
}
