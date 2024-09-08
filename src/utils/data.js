export const quiz = [
    {
        subject: 'Mathematics',
        topics: [
            {
                topic: 'Algebra',
                duration: '3 minutes',
                questions: [
                    'What is the value of π?',
                    'What is 5 + 7?',
                    'What is the square root of 64?',
                    'Solve for x: 2x + 3 = 7',
                    'What is the derivative of x^2?',
                    'What is the area of a circle with radius 3?',
                    'What is the sum of angles in a triangle?',
                    'What is the value of 9/3?',
                    'What is 2 to the power of 3?',
                    'What is the value of sin(90°)?'
                ],
                options: [
                    ['3.14', '2.71', '3.16', '2.16', 'None of the above'],
                    ['10', '12', '11', '13', '14'],
                    ['6', '7', '8', '9', 'None of the above'],
                    ['1', '2', '3', '4', 'None of the above'],
                    ['x', 'x^2', '2x', '2', 'None of the above'],
                    ['18.84', '28.26', '37.68', '47.1', 'None of the above'],
                    ['180°', '360°', '90°', '270°', 'None of the above'],
                    ['2', '3', '4', '1', 'None of the above'],
                    ['6', '8', '7', '9', 'None of the above'],
                    ['0', '1', '0.5', '-1', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'B', 'C', 'A', 'C', 'B', 'A', 'C', 'B', 'A'
                ]
            },
            {
                topic: 'Geometry',
                duration: '2 minutes',
                questions: [
                    'What is the sum of interior angles in a triangle?',
                    'What is the area of a rectangle?',
                    'What is the Pythagorean theorem?',
                    'What is the formula for the area of a circle?',
                    'What is the perimeter of a square?',
                    'What is the volume of a cube?',
                    'What is a right angle?',
                    'What is a parallelogram?',
                    'What is the length of the hypotenuse?',
                    'What is a chord in a circle?'
                ],
                options: [
                    ['180°', '360°', '90°', '270°', 'None of the above'],
                    ['Length × Width', 'Length + Width', 'Length / Width', 'Width - Length', 'None of the above'],
                    ['a^2 + b^2 = c^2', 'a^2 - b^2 = c^2', 'a^2 / b^2 = c^2', 'a^2 × b^2 = c^2', 'None of the above'],
                    ['πr^2', '2πr', 'πr', 'r^2', 'None of the above'],
                    ['4 × Side', '2 × Side', 'Side × Side', 'Side / 4', 'None of the above'],
                    ['Side^3', 'Side^2', 'Side', 'Side × Side', 'None of the above'],
                    ['90°', '180°', '360°', '45°', 'None of the above'],
                    ['A quadrilateral with opposite sides equal', 'A triangle', 'A rectangle', 'A square', 'None of the above'],
                    ['Longest side in a right-angled triangle', 'Shortest side in a right-angled triangle', 'Any side in a right-angled triangle', 'None of the above'],
                    ['A line segment joining two points on a circle', 'A line segment passing through the center of a circle', 'A line tangent to a circle', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            },
            {
                topic: 'Calculus',
                duration: '2.5 minutes',
                questions: [
                    'What is the derivative of sin(x)?',
                    'What is the integral of x dx?',
                    'What is the limit of (1 + 1/n)^n as n approaches infinity?',
                    'What is the derivative of e^x?',
                    'What is the area under the curve y = x^2 from x=0 to x=2?',
                    'What is the derivative of ln(x)?',
                    'What is the second derivative of x^3?',
                    'What is the integral of 1/x dx?',
                    'What is the derivative of tan(x)?',
                    'What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?'
                ],
                options: [
                    ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)', 'None of the above'],
                    ['x^2/2', 'x^2', 'x', '1/x', 'None of the above'],
                    ['e', '1', '0', 'Infinity', 'None of the above'],
                    ['e^x', 'x^e', 'e', 'x', 'None of the above'],
                    ['8/3', '4/3', '2/3', '1/3', 'None of the above'],
                    ['1/x', 'x', 'ln(x)', 'x ln(x)', 'None of the above'],
                    ['6x', '3x^2', 'x^2', '2x^3', 'None of the above'],
                    ['ln(x)', 'x ln(x)', 'x^2', '1/x', 'None of the above'],
                    ['sec^2(x)', 'tan^2(x)', 'sin^2(x)', 'cos^2(x)', 'None of the above'],
                    ['1', '0', '2', 'Infinity', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            },
            {
                topic: 'Statistics',
                duration: '1.5 minutes',
                questions: [
                    'What is the mean of the numbers 2, 3, 5, 7, 11?',
                    'What is the median of the numbers 1, 2, 4, 4, 7, 9?',
                    'What is the mode of the numbers 1, 2, 2, 3, 4, 5?',
                    'What is the probability of rolling a 3 on a six-sided die?',
                    'What is the standard deviation of the numbers 1, 2, 3?',
                    'What is the range of the numbers 7, 3, 10, 2, 6?',
                    'What is the variance of the numbers 1, 2, 3, 4, 5?',
                    'What is the z-score of a value that is one standard deviation above the mean?',
                    'What is a normal distribution?',
                    'What is a histogram?'
                ],
                options: [
                    ['5.6', '6', '4.4', '5', 'None of the above'],
                    ['4', '3', '5', '2', 'None of the above'],
                    ['2', '1', '3', '4', 'None of the above'],
                    ['1/6', '1/3', '1/2', '1/4', 'None of the above'],
                    ['1', '0.5', '0.707', '1.5', 'None of the above'],
                    ['8', '9', '7', '6', 'None of the above'],
                    ['2', '1.5', '1', '3', 'None of the above'],
                    ['1', '0', '2', '3', 'None of the above'],
                    ['A bell-shaped curve', 'A flat line', 'A U-shaped curve', 'None of the above'],
                    ['A bar chart', 'A pie chart', 'A line chart', 'A scatter plot', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            }
        ]
    },
    {
        subject: 'Science',
        topics: [
            {
                topic: 'Physics',
                duration: '2.5 minutes',
                questions: [
                    'What planet is known as the Red Planet?',
                    'What is the chemical symbol for water?',
                    'What gas do plants absorb from the atmosphere?',
                    'What is the hardest natural substance on Earth?',
                    'What is the speed of light?',
                    'What is the boiling point of water?',
                    'What is the largest organ in the human body?',
                    'What is the atomic number of hydrogen?',
                    'What force keeps us on the ground?',
                    'What is the most abundant gas in Earth’s atmosphere?'
                ],
                options: [
                    ['Earth', 'Mars', 'Venus', 'Jupiter', 'None of the above'],
                    ['H2O', 'CO2', 'O2', 'HO', 'None of the above'],
                    ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium', 'None of the above'],
                    ['Diamond', 'Gold', 'Iron', 'Graphite', 'None of the above'],
                    ['299,792,458 m/s', '150,000,000 m/s', '3,000,000 m/s', '30,000 m/s', 'None of the above'],
                    ['100°C', '0°C', '50°C', '25°C', 'None of the above'],
                    ['Skin', 'Heart', 'Liver', 'Lungs', 'None of the above'],
                    ['1', '2', '3', '4', 'None of the above'],
                    ['Gravity', 'Friction', 'Magnetism', 'Tension', 'None of the above'],
                    ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Hydrogen', 'None of the above']
                ],
                correctAnswer: [
                    'B', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            },
            {
                topic: 'Chemistry',
                duration: '2.0 minutes',
                questions: [
                    'What is the chemical formula for glucose?',
                    'What element has the atomic number 2?',
                    'What is the pH of pure water?',
                    'What is the chemical symbol for sodium?',
                    'What is the law of conservation of mass?',
                    'What is an acid?',
                    'What is the periodic table?',
                    'What is a mole in chemistry?',
                    'What is the chemical name for table salt?',
                    'What element is represented by the symbol Au?'
                ],
                options: [
                    ['C6H12O6', 'H2O', 'NaCl', 'O2', 'None of the above'],
                    ['Helium', 'Hydrogen', 'Oxygen', 'Carbon', 'None of the above'],
                    ['7', '5', '9', '2', 'None of the above'],
                    ['Na', 'K', 'Ca', 'Fe', 'None of the above'],
                    ['Mass cannot be created or destroyed', 'Energy cannot be created or destroyed', 'Matter cannot be created or destroyed', 'None of the above'],
                    ['A substance with a pH less than 7', 'A substance with a pH greater than 7', 'A substance with a pH of 7', 'None of the above'],
                    ['A table that organizes elements by atomic number', 'A chart that organizes elements by mass', 'A list of elements', 'None of the above'],
                    ['A unit used to express atomic and molecular weights', 'A unit used to express mass', 'A unit used to express energy', 'None of the above'],
                    ['Sodium chloride', 'Potassium chloride', 'Calcium chloride', 'Magnesium chloride', 'None of the above'],
                    ['Gold', 'Silver', 'Iron', 'Copper', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            },
            {
                topic: 'Biology',
                duration: '2.5 minutes',
                questions: [
                    'What is the powerhouse of the cell?',
                    'What is the process of converting sunlight into energy called?',
                    'What is the basic unit of life?',
                    'What is the largest organ in the human body?',
                    'What is the function of red blood cells?',
                    'What is DNA?',
                    'What is the process by which cells divide?',
                    'What is a gene?',
                    'What is the function of the respiratory system?',
                    'What is homeostasis?'
                ],
                options: [
                    ['Mitochondria', 'Nucleus', 'Ribosome', 'Chloroplast', 'None of the above'],
                    ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation', 'None of the above'],
                    ['Cell', 'Tissue', 'Organ', 'Organism', 'None of the above'],
                    ['Skin', 'Heart', 'Liver', 'Lungs', 'None of the above'],
                    ['Transport oxygen', 'Fight infection', 'Clot blood', 'Digest food', 'None of the above'],
                    ['Deoxyribonucleic acid', 'Ribonucleic acid', 'Protein', 'Lipid', 'None of the above'],
                    ['Mitosis', 'Meiosis', 'Binary fission', 'Budding', 'None of the above'],
                    ['A segment of DNA', 'A segment of RNA', 'A type of protein', 'A type of cell', 'None of the above'],
                    ['To exchange gases', 'To pump blood', 'To digest food', 'To remove waste', 'None of the above'],
                    ['Maintaining a stable internal environment', 'Maintaining a stable external environment', 'Maintaining a constant body temperature', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            }
        ]
    },
    {
        subject: 'History',
        topics: [
            {
                topic: 'World War I',
                duration: '2.0 minutes',
                questions: [
                    'When did World War I begin?',
                    'Who was the Archduke assassinated in 1914?',
                    'What was the name of the treaty that ended World War I?',
                    'Which country was blamed for World War I?',
                    'What year did World War I end?',
                    'Which battle was the longest of World War I?',
                    'Which weapon was first used in World War I?',
                    'Who was the President of the United States during World War I?',
                    'Which country exited the war after the Russian Revolution?',
                    'What was the main alliance opposing the Allies?'
                ],
                options: [
                    ['1914', '1915', '1916', '1917', 'None of the above'],
                    ['Franz Ferdinand', 'Nicholas II', 'George V', 'Wilhelm II', 'None of the above'],
                    ['Treaty of Versailles', 'Treaty of Paris', 'Treaty of Vienna', 'Treaty of Brest-Litovsk', 'None of the above'],
                    ['Germany', 'Austria', 'Hungary', 'Russia', 'None of the above'],
                    ['1917', '1918', '1919', '1920', 'None of the above'],
                    ['Battle of Verdun', 'Battle of the Somme', 'Battle of Ypres', 'Battle of Marne', 'None of the above'],
                    ['Tanks', 'Airplanes', 'Submarines', 'Poison gas', 'None of the above'],
                    ['Woodrow Wilson', 'Franklin D. Roosevelt', 'Theodore Roosevelt', 'Harry Truman', 'None of the above'],
                    ['Russia', 'Germany', 'France', 'Britain', 'None of the above'],
                    ['Central Powers', 'Axis Powers', 'Eastern Bloc', 'Western Allies', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'A', 'B', 'A', 'D', 'A', 'A', 'A'
                ]
            },
            {
                topic: 'The Renaissance',
                duration: '1.5 minutes',
                questions: [
                    'Where did the Renaissance begin?',
                    'Who painted the Mona Lisa?',
                    'What invention helped spread Renaissance ideas?',
                    'What was the main language of Renaissance literature?',
                    'Who wrote "The Prince"?',
                    'Who sculpted David?',
                    'Which family was a major patron of the arts in Florence?',
                    'What was the main theme of Renaissance art?',
                    'What movement was closely associated with the Renaissance?',
                    'Who was known as the Father of Humanism?'
                ],
                options: [
                    ['Italy', 'France', 'Germany', 'Spain', 'None of the above'],
                    ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello', 'None of the above'],
                    ['The printing press', 'The steam engine', 'The telescope', 'The compass', 'None of the above'],
                    ['Latin', 'Greek', 'Italian', 'French', 'None of the above'],
                    ['Niccolò Machiavelli', 'Dante Alighieri', 'Petrarch', 'Boccaccio', 'None of the above'],
                    ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello', 'None of the above'],
                    ['The Medici family', 'The Borgia family', 'The Sforza family', 'The Pazzi family', 'None of the above'],
                    ['Humanism', 'Religion', 'Nature', 'Politics', 'None of the above'],
                    ['Humanism', 'Socialism', 'Feminism', 'Communism', 'None of the above'],
                    ['Petrarch', 'Dante', 'Boccaccio', 'Cicero', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            },
            {
                topic: 'The American Revolution',
                duration: '2.0 minutes',
                questions: [
                    'When did the American Revolution begin?',
                    'Who was the commander-in-chief of the Continental Army?',
                    'What was the name of the first constitution of the United States?',
                    'Which event marked the beginning of the American Revolution?',
                    'Who was the King of England during the American Revolution?',
                    'What was the last major battle of the American Revolution?',
                    'Which treaty ended the American Revolution?',
                    'Who wrote the Declaration of Independence?',
                    'What was the main reason for the American Revolution?',
                    'What was the name of the war that preceded the American Revolution?'
                ],
                options: [
                    ['1775', '1776', '1777', '1778', 'None of the above'],
                    ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin', 'None of the above'],
                    ['The Articles of Confederation', 'The Constitution', 'The Bill of Rights', 'The Federalist Papers', 'None of the above'],
                    ['The Battle of Lexington and Concord', 'The Boston Tea Party', 'The Battle of Bunker Hill', 'The Signing of the Declaration of Independence', 'None of the above'],
                    ['George III', 'George II', 'William III', 'Henry VIII', 'None of the above'],
                    ['The Battle of Yorktown', 'The Battle of Saratoga', 'The Battle of Trenton', 'The Battle of Bunker Hill', 'None of the above'],
                    ['The Treaty of Paris', 'The Treaty of Versailles', 'The Treaty of Ghent', 'The Treaty of Utrecht', 'None of the above'],
                    ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin', 'None of the above'],
                    ['Taxation without representation', 'Religious freedom', 'Slavery', 'Trade restrictions', 'None of the above'],
                    ['The French and Indian War', 'The War of 1812', 'The Spanish-American War', 'The Seven Years War', 'None of the above']
                ],
                correctAnswer: [
                    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'
                ]
            }
        ]
    }
]
