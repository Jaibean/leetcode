
"""Python:

List of words are provided, so club all the words formed with  same characters (anagrams) and return it as a list


Input: [“cat”,”tea”,”act”,”ate”,”bot”,”eat”]  
Output: [["bot"],["act","cat"],["ate","eat","tea"]] """


def groupAnagrams(strs):
      result = {}
      for i in strs:
         x = "".join(sorted(i))
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values())