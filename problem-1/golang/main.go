package main

import "fmt"

func main() {
	sum := sumMultiples(100)

	fmt.Println(sum)
}

func sumMultiples(n int) (sum int) {
	for i := 1; i < n; i++ {
		if i%3 == 0 {
			sum += i
		}

		if i%5 == 0 {
			sum += i
		}
	}

	return sum
}
