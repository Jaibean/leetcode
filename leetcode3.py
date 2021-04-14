# Given an integer x, return true if x is palindrome integer.
# An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
# Follow up: Could you solve it without converting the integer to a string?


class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        return str(x) == str(x)[::-1]