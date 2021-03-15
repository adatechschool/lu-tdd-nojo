from fractions import Fraction
# #to import the Fraction type from the fractions module in the standard library
import unittest

target = __import__("/my_sym/my_sum.py")
#préciser le chemin relatif pour accéder au fichier my_sum.py
sum = target.sum


class TestSum(unittest.TestCase):
    def test_list_int(self):
        """
        Test that it can sum a list of integers
        """
        data = [1, 2, 3]
        result = sum(data)
        self.assertEqual(result, 6)

    # #testons avec des fractions
    # def test_list_fraction(self):
    #     """
    #     Test that it can sum a list of fractions
    #     """
    #     data = [Fraction(1, 4), Fraction(1, 4), Fraction(2, 5)]
    #     result = sum(data)
    #     self.assertEqual(result, 1)


if __name__ == '__main__':
    unittest.main()

#python -m unittest test : pour lancer le test dans le terminal
#tester tous les tests via Terminal : python -m unittest discover -s tests
#si le code source est contenu dans "subdirectory", ex dans un dossier nommé src/:
#python -m unittest discover -s tests -t src

