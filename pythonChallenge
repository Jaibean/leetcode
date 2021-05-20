""" Coding Challenge """

class Solution:
    def reverse(self, x: int) -> int:
        if x == 0:
            return 0
        
        output = []
        
        if x < 0:
            output.append("-")
            x = -x
            
        while x > 0:
            output.append(x % 10)
            x = x // 10
            
        output = int("".join(map(str, output)))
        
        if not -2**31 <= output <= 2**31-1:
            return 0
        else:
            return output