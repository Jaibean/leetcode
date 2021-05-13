
SQL

Staff Table with their supervisor details. Find all the staff who are earning more than their supervisor.

Table: Staff

+----+-------+--------+-----------+
| Id | Name    | Salary | SupervisorId |
+----+-------+--------+---------------+
| 1  | Jack    | 70000  | 3           |
| 2  | William | 80000  | 4           |
| 3  | Samuel  | 60000  | NULL        |
| 4  | Michael | 90000  | NULL        |
+----+-------+--------+---------------+

SELECT FROM TABLE Staff, Name, Salary, SupervisorID
INNER JOIN Staff ON Id



select s1.name from
staff s1 join staff s2 on s1.superv







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