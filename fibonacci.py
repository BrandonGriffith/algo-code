class MainFib:
    cache = {}

    def fib(self, num):
        if num < 2:
            return num
        if num in self.cache:
            return self.cache[num]
        self.cache[num] = self.fib(num-1) + self.fib(num-2)
        print(self.cache)
        return self.cache[num]


dynamicFib = MainFib()
print(dynamicFib.fib(4))
