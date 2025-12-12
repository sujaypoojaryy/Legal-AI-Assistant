    // ==================== ENHANCED LEGAL DATASET ====================
    const legalDataset = {
        "constitutional_law": {
            "name": "Constitutional Law",
            "description": "Fundamental rights, directive principles, and constitutional framework",
            "resources": [
                {
                    "question": "What is Article 21 of the Indian Constitution?",
                    "answer": `
                    <div class="legal-provision">
                        <strong>Article 21 of the Indian Constitution</strong> states: "No person shall be deprived of his life or personal liberty except according to procedure established by law."
                    </div>

                    <p class="mt-3"><strong>Judicial Expansions by Supreme Court:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li><strong>Right to Privacy</strong> - <span class="legal-citation">Justice K.S. Puttaswamy vs Union of India (2017)</span></li>
                        <li><strong>Right to Clean Environment</strong> - <span class="legal-citation">Subhash Kumar vs State of Bihar (1991)</span></li>
                        <li><strong>Right to Speedy Trial</strong> - <span class="legal-citation">Hussainara Khatoon vs Home Secretary, Bihar (1979)</span></li>
                        <li><strong>Right to Legal Aid</strong> - <span class="legal-citation">M.H. Hoskot vs State of Maharashtra (1978)</span></li>
                        <li><strong>Right to Livelihood</strong> - <span class="legal-citation">Olga Tellis vs Bombay Municipal Corporation (1985)</span></li>
                    </ul>

                    <p class="mt-3"><strong>Related Constitutional Provisions:</strong></p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span class="bg-blue-100 text-legal-blue px-3 py-1 rounded-full text-xs font-medium">Article 14 - Equality</span>
                        <span class="bg-blue-100 text-legal-blue px-3 py-1 rounded-full text-xs font-medium">Article 19 - Freedoms</span>
                        <span class="bg-blue-100 text-legal-blue px-3 py-1 rounded-full text-xs font-medium">Article 32 - Remedies</span>
                    </div>
                    `,
                    "sources": ["Constitution of India, Article 21", "Various Supreme Court Judgments"],
                    "confidence": 0.95,
                    "suggested_questions": [
                        "What is the difference between Article 14 and Article 21?",
                        "How has Article 21 been interpreted by the Supreme Court?",
                        "What are the limitations on fundamental rights?"
                    ]
                }
            ]
        },
        "criminal_law": {
            "name": "Criminal Law",
            "description": "Indian Penal Code, Criminal Procedure Code, and Evidence Act",
            "resources": [
                {
                    "question": "Explain IPC Section 420.",
                    "answer": `
                    <div class="legal-provision">
                        <strong>Section 420 of the Indian Penal Code</strong> deals with "Cheating and dishonestly inducing delivery of property."
                    </div>

                    <p class="mt-3"><strong>Essential Ingredients:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li>Deception of any person</li>
                        <li>Fraudulently or dishonestly inducing that person</li>
                        <li>To deliver any property to any person</li>
                        <li>Or to make, alter, or destroy any valuable security</li>
                    </ul>

                    <p class="mt-3"><strong>Punishment:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li>Imprisonment of either description for a term which may extend to 7 years</li>
                        <li>And shall also be liable to fine</li>
                    </ul>

                    <p class="mt-3"><strong>Key Judicial Interpretations:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li>Mere breach of contract doesn't constitute cheating unless fraudulent intention exists at the time of making promise</li>
                        <li>Cheating requires deception from the very beginning</li>
                        <li>Section 415 defines cheating, Section 420 is aggravated form</li>
                    </ul>

                    <p class="mt-3"><strong>Related Sections:</strong></p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">IPC 415 - Cheating</span>
                        <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">IPC 416 - Cheating by Personation</span>
                        <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">IPC 417 - Punishment for Cheating</span>
                    </div>
                    `,
                    "sources": ["Indian Penal Code, 1860", "Bharatiya Nyaya Sanhita", "Criminal Procedure Code"],
                    "confidence": 0.92,
                    "suggested_questions": [
                        "What is the difference between theft and cheating?",
                        "What are the rights of an accused person?",
                        "How does bail work in criminal cases?"
                    ]
                }
            ]
        },
        "civil_law": {
            "name": "Civil Law",
            "description": "Civil Procedure Code, Contract Act, Property Law",
            "resources": [
                {
                    "question": "How to file a civil suit?",
                    "answer": `
                    <div class="legal-provision">
                        <strong>Filing a Civil Suit in India</strong> involves following the procedure under the Code of Civil Procedure, 1908.
                    </div>

                    <p class="mt-3"><strong>Step-by-Step Procedure:</strong></p>
                    <ol class="list-decimal ml-5 space-y-3 mt-2">
                        <li>
                            <strong>Drafting the Plaint</strong>
                            <ul class="list-disc ml-5 mt-1 text-sm">
                                <li>Name and description of parties</li>
                                <li>Facts constituting cause of action</li>
                                <li>Jurisdiction of court</li>
                                <li>Valuation of suit for court fees</li>
                                <li>Relief claimed</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Court Fees</strong>
                            <ul class="list-disc ml-5 mt-1 text-sm">
                                <li>Calculate court fees as per State Court Fees Act</li>
                                <li>Affix court fee stamps</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Filing in Court</strong>
                            <ul class="list-disc ml-5 mt-1 text-sm">
                                <li>File plaint in appropriate court (territorial & pecuniary jurisdiction)</li>
                                <li>Submit required number of copies</li>
                                <li>Submit list of documents and witnesses</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Summons to Defendant</strong>
                            <ul class="list-disc ml-5 mt-1 text-sm">
                                <li>Court issues summons to defendant</li>
                                <li>Defendant files written statement within 30 days</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Trial & Judgment</strong>
                            <ul class="list-disc ml-5 mt-1 text-sm">
                                <li>Framing of issues</li>
                                <li>Recording of evidence</li>
                                <li>Final arguments</li>
                                <li>Judgment and decree</li>
                            </ul>
                        </li>
                    </ol>

                    <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <p class="text-sm text-blue-800">
                            <strong>Important:</strong> Limitation period for civil suits is generally 3 years from the date when right to sue accrues. Consult a lawyer for specific cases.
                        </p>
                    </div>
                    `,
                    "sources": ["Code of Civil Procedure, 1908", "Various State Court Fees Acts"],
                    "confidence": 0.91,
                    "suggested_questions": [
                        "What is the limitation period for civil suits?",
                        "What are the different types of civil suits?",
                        "How to calculate court fees?"
                    ]
                }
            ]
        },
        "digital_law": {
            "name": "Digital & Cyber Laws",
            "description": "IT Act, Data Protection, and Cybersecurity laws",
            "resources": [
                {
                    "question": "What is the DPDP Act?",
                    "answer": `
                    <div class="legal-provision">
                        <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> is India's comprehensive data privacy law governing the processing of digital personal data.
                    </div>

                    <p class="mt-3"><strong>Key Features:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li><strong>Applicability:</strong> Applies to processing of digital personal data within India</li>
                        <li><strong>Data Principal:</strong> Individual to whom personal data relates</li>
                        <li><strong>Data Fiduciary:</strong> Entity that determines purpose and means of processing</li>
                        <li><strong>Consent:</strong> Freely given, specific, informed, and unambiguous</li>
                        <li><strong>Legitimate Uses:</strong> Certain processing allowed without consent for specific purposes</li>
                    </ul>

                    <p class="mt-3"><strong>Rights of Data Principals:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li>Right to access information about personal data</li>
                        <li>Right to correction and erasure</li>
                        <li>Right to grievance redressal</li>
                        <li>Right to nominate another person in case of death/incapacity</li>
                    </ul>

                    <p class="mt-3"><strong>Obligations of Data Fiduciaries:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li>Implement security safeguards</li>
                        <li>Notify Data Protection Board of breaches</li>
                        <li>Erase data when no longer necessary</li>
                        <li>Appoint Data Protection Officer (for Significant Data Fiduciaries)</li>
                    </ul>

                    <div class="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                        <p class="text-sm text-purple-800"><strong>Significance:</strong> The DPDP Act aligns India with global data protection standards while creating a unique framework suited to Indian requirements.</p>
                    </div>
                    `,
                    "sources": ["Digital Personal Data Protection Act, 2023", "Ministry of Electronics and IT"],
                    "confidence": 0.91,
                    "suggested_questions": [
                        "What is the difference between DPDP Act and IT Act?",
                        "What are the penalties under DPDP Act?",
                        "How to file a data protection complaint?"
                    ]
                }
            ]
        },
        "consumer_law": {
            "name": "Consumer Law",
            "description": "Consumer protection rights and remedies",
            "resources": [
                {
                    "question": "What are my consumer protection rights?",
                    "answer": `
                    <div class="legal-provision">
                        <strong>Consumer Protection Act, 2019</strong> provides six fundamental rights to protect consumers in India.
                    </div>

                    <p class="mt-3"><strong>Six Consumer Rights:</strong></p>
                    <ol class="list-decimal ml-5 space-y-3 mt-2">
                        <li>
                            <strong>Right to Safety</strong>
                            <p class="text-sm mt-1">Protection against marketing of goods/services hazardous to life and property.</p>
                        </li>
                        <li>
                            <strong>Right to be Informed</strong>
                            <p class="text-sm mt-1">About quality, quantity, potency, purity, standard, and price of goods/services.</p>
                        </li>
                        <li>
                            <strong>Right to Choose</strong>
                            <p class="text-sm mt-1">Access to variety of goods/services at competitive prices.</p>
                        </li>
                        <li>
                            <strong>Right to be Heard</strong>
                            <p class="text-sm mt-1">Consumer interests to receive due consideration at appropriate forums.</p>
                        </li>
                        <li>
                            <strong>Right to Seek Redressal</strong>
                            <p class="text-sm mt-1">Against unfair trade practices or restrictive trade practices.</p>
                        </li>
                        <li>
                            <strong>Right to Consumer Education</strong>
                            <p class="text-sm mt-1">Acquire knowledge and skills to be informed consumer.</p>
                        </li>
                    </ol>

                    <p class="mt-3"><strong>Three-Tier Consumer Dispute Redressal Mechanism:</strong></p>
                    <ul class="list-disc ml-5 space-y-2 mt-2">
                        <li><strong>District Commission:</strong> Claims up to ₹1 crore</li>
                        <li><strong>State Commission:</strong> Claims between ₹1 crore to ₹10 crores</li>
                        <li><strong>National Commission:</strong> Claims above ₹10 crores</li>
                    </ul>

                    <p class="mt-3"><strong>Time Limit for Filing Complaint:</strong></p>
                    <p>Within 2 years from the date of cause of action.</p>

                    <div class="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                        <p class="text-sm text-green-800"><strong>Note:</strong> The 2019 Act introduced mediation, product liability, and simplified the process for e-filing of complaints.</p>
                    </div>
                    `,
                    "sources": ["Consumer Protection Act, 2019", "National Consumer Disputes Redressal Commission"],
                    "confidence": 0.93,
                    "suggested_questions": [
                        "How to file a consumer complaint?",
                        "What is the time limit for consumer complaints?",
                        "What are unfair trade practices?"
                    ]
                }
            ]
        }
    };

    // ==================== SEARCH FUNCTION ====================
    function findLegalAnswer(userQuery) {
        const lowercaseQuery = userQuery.toLowerCase().trim();

        if (!lowercaseQuery) {
            return {
                question: userQuery,
                answer: "Please ask a question about Indian law. I can help with Constitutional Law, Criminal Law, Civil Law, Digital Laws, Consumer Protection, and more.",
                sources: ["General Legal Information"],
                confidence: 0.1,
                suggested_questions: [
                    "What are my fundamental rights under the Constitution?",
                    "How does the criminal justice system work in India?",
                    "What is the DPDP Act?",
                    "How to file a consumer complaint?"
                ]
            };
        }

        // Search through all categories and questions
        let bestMatch = null;
        let highestScore = 0;

        for (const category in legalDataset) {
            for (const resource of legalDataset[category].resources) {
                let score = 0;

                // Exact question match
                if (resource.question.toLowerCase() === lowercaseQuery) {
                    score = 100;
                }

                // Partial question match
                else if (resource.question.toLowerCase().includes(lowercaseQuery) ||
                        lowercaseQuery.includes(resource.question.toLowerCase())) {
                    score = 80;
                }

                // Keyword matching in question
                else {
                    const queryWords = lowercaseQuery.split(' ');
                    const questionWords = resource.question.toLowerCase().split(' ');

                    const matchingWords = queryWords.filter(word =>
                        word.length > 3 && questionWords.some(qWord => qWord.includes(word))
                    );

                    score = matchingWords.length * 10;
                }

                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = resource;
                }
            }
        }

        // Return best match if found
        if (bestMatch && highestScore > 20) {
            return bestMatch;
        }

        // Fallback response
        return {
            question: userQuery,
            answer: `
            <div class="legal-provision">
                I understand you're asking about <strong>"${userQuery}"</strong>. While I have comprehensive knowledge of Indian legal principles,
                for specific detailed advice, I recommend:
            </div>

            <p class="mt-3"><strong>Suggested Approaches:</strong></p>
            <ul class="list-disc ml-5 space-y-2 mt-2">
                <li><strong>Consult a qualified lawyer</strong> for your particular situation</li>
                <li><strong>Be more specific</strong> about the legal area or provision you're interested in</li>
                <li><strong>Reference specific articles, sections, or acts</strong> for precise information</li>
            </ul>

            <p class="mt-3"><strong>Key Legal Areas I Can Help With:</strong></p>
            <div class="grid grid-cols-2 gap-2 mt-2">
                <span class="bg-blue-100 text-legal-blue px-3 py-1 rounded-full text-xs font-medium text-center">Constitutional Law</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium text-center">Criminal Law</span>
                <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium text-center">Civil Law</span>
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium text-center">Digital Laws</span>
            </div>

            <div class="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                <p class="text-sm text-yellow-800">
                    <strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice.
                    Please consult a qualified lawyer for specific legal matters.
                </p>
            </div>
            `,
            sources: ["General Legal Principles"],
            confidence: 0.3,
            suggested_questions: [
                "What are my fundamental rights under the Constitution?",
                "How does the criminal justice system work in India?",
                "What is the DPDP Act?",
                "How to file a consumer complaint?",
                "What are the rights of an arrested person?"
            ]
        };
    }

    // ==================== MAIN APPLICATION CODE ====================
    document.addEventListener('DOMContentLoaded', function() {
        const chatInput = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');
        const chatHistory = document.getElementById('chat-history');
        const quickActionButtons = document.querySelectorAll('.quick-action');
        const categoryCards = document.querySelectorAll('.category-card');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMobileMenu = document.getElementById('close-mobile-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const resourceTabs = document.querySelectorAll('.resource-tab');

        // Set current time
        document.getElementById('current-time').textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        // Function to add a message to the chat
        function addMessage(content, isUser = false, showTyping = false) {
            const messageDiv = document.createElement('div');
            const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            if (isUser) {
                messageDiv.className = 'user-message-enhanced rounded-2xl p-4 max-w-[85%] ml-auto animate-slide-in';
                messageDiv.innerHTML = `
                    <div class="flex items-start space-x-3">
                        <div class="flex-1">
                            <p>${content}</p>
                            <div class="text-xs text-blue-100 mt-2 flex justify-between">
                                <span>You</span>
                                <span>${timestamp}</span>
                            </div>
                        </div>
                        <div class="bg-white bg-opacity-20 p-2 rounded-full mt-1">
                            <i class="fas fa-user text-white"></i>
                        </div>
                    </div>
                `;
            } else if (showTyping) {
                messageDiv.className = 'bot-message-enhanced rounded-2xl p-4 max-w-[85%] animate-slide-in';
                messageDiv.innerHTML = `
                    <div class="flex items-start space-x-3">
                        <div class="bg-legal-light p-2 rounded-full mt-1">
                            <i class="fas fa-robot text-white text-sm"></i>
                        </div>
                        <div class="flex-1">
                            <div class="typing-indicator flex items-center">
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                                <span class="text-gray-500 text-sm ml-2">Legal Assistant is researching...</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                messageDiv.className = 'bot-message-enhanced rounded-2xl p-4 max-w-[85%] animate-slide-in';
                messageDiv.innerHTML = content;
            }

            chatHistory.querySelector('.space-y-4').appendChild(messageDiv);
            chatHistory.scrollTop = chatHistory.scrollHeight;
            return messageDiv;
        }

        // Function to add AI response
        function addAIResponse(responseData) {
            const messageDiv = document.createElement('div');
            const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            messageDiv.className = 'bot-message-enhanced rounded-2xl p-4 max-w-[85%] animate-slide-in';

            let sourcesHtml = '';
            if (responseData.sources && responseData.sources.length > 0) {
                sourcesHtml = `
                    <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 class="font-semibold text-blue-800 text-sm mb-2">Legal Sources & References:</h4>
                        <ul class="text-xs text-blue-700 list-disc list-inside space-y-1">
                            ${responseData.sources.map(source => `<li>${source}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            let suggestedQuestionsHtml = '';
            if (responseData.suggested_questions && responseData.suggested_questions.length > 0) {
                suggestedQuestionsHtml = `
                    <div class="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                        <h4 class="font-semibold text-green-800 text-sm mb-2">Related Questions You Might Have:</h4>
                        <div class="flex flex-wrap gap-2 mt-2">
                            ${responseData.suggested_questions.map(q =>
                                `<button class="suggested-question bg-white text-green-700 px-3 py-1 rounded-full text-xs border border-green-200 hover:bg-green-50 transition-colors micro-interaction" data-question="${q}">${q}</button>`
                            ).join('')}
                        </div>
                    </div>
                `;
            }

            messageDiv.innerHTML = `
                <div class="flex items-start space-x-3">
                    <div class="bg-legal-light p-2 rounded-full mt-1">
                        <i class="fas fa-robot text-white text-sm"></i>
                    </div>
                    <div class="flex-1">
                        <div class="prose prose-sm max-w-none">
                            ${responseData.answer}
                        </div>

                        ${sourcesHtml}
                        ${suggestedQuestionsHtml}

                        <div class="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                            <div class="flex items-start">
                                <i class="fas fa-lightbulb text-yellow-500 mt-1 mr-2"></i>
                                <p class="text-sm text-yellow-800">
                                    <span class="font-semibold">Legal Disclaimer:</span> This Platform Provides Verified Legal Information but does not Offer Legal Advice. For Professional Guidance, Consult a Qualified Lawyer.
                                </p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center mt-3">
                            <div class="flex items-center space-x-2">
                                <span class="text-xs text-gray-500">Confidence: ${Math.round(responseData.confidence * 100)}%</span>
                                <div class="confidence-indicator w-16">
                                    <div class="confidence-fill" style="width: ${Math.round(responseData.confidence * 100)}%"></div>
                                </div>
                            </div>
                            <div class="text-xs text-gray-500">
                                <span>Legal Assistant</span>
                                <span class="ml-2">${timestamp}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            chatHistory.querySelector('.space-y-4').appendChild(messageDiv);
            chatHistory.scrollTop = chatHistory.scrollHeight;

            // Add event listeners to suggested questions
            messageDiv.querySelectorAll('.suggested-question').forEach(button => {
                button.addEventListener('click', function() {
                    handleUserQuestion(this.getAttribute('data-question'));
                });
            });
        }

        // Function to handle user questions
        function handleUserQuestion(question) {
            addMessage(question, true);

            const typingIndicator = addMessage('', false, true);

            setTimeout(() => {
                typingIndicator.remove();
                const response = findLegalAnswer(question);
                addAIResponse(response);
                chatInput.value = '';
            }, 1500);
        }

        // Event listeners
        sendButton.addEventListener('click', function() {
            const question = chatInput.value.trim();
            if (question) {
                handleUserQuestion(question);
            }
        });

        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const question = chatInput.value.trim();
                if (question) {
                    handleUserQuestion(question);
                }
            }
        });

        quickActionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const question = this.getAttribute('data-question');
                handleUserQuestion(question);
            });
        });

        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                let question = '';

                if (category === 'constitutional') {
                    question = 'What are fundamental rights in the Indian Constitution?';
                } else if (category === 'criminal') {
                    question = 'Explain IPC Section 420';
                } else if (category === 'civil') {
                    question = 'How to file a civil suit?';
                } else if (category === 'digital') {
                    question = 'What is the DPDP Act?';
                } else if (category === 'commercial') {
                    question = 'What are the key provisions of Companies Act?';
                } else if (category === 'labor') {
                    question = 'What are the basic rights of workers in India?';
                }

                handleUserQuestion(question);
            });
        });

        // Mobile menu functionality
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('open');
        });

        closeMobileMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
        });

        // Resource tabs functionality
        resourceTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                resourceTabs.forEach(t => {
                    t.classList.remove('active');
                    t.classList.remove('border-legal-light');
                    t.classList.add('border-transparent');
                });

                // Add active class to clicked tab
                this.classList.add('active');
                this.classList.add('border-legal-light');
                this.classList.remove('border-transparent');

                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                    content.classList.remove('active');
                });

                // Show the selected tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(`${tabId}-content`).classList.remove('hidden');
                document.getElementById(`${tabId}-content`).classList.add('active');
            });
        });

        // Voice button functionality
        document.getElementById('voice-btn').addEventListener('click', function() {
            alert('Voice feature requires microphone access. Please type your question for now.');
        });

        // Initialize with enhanced welcome message
        setTimeout(() => {
            const welcomeResponse = {
                question: "Welcome",
                answer: `
                <div class="legal-provision">
                    <strong>Welcome to Legal Assistant!</strong> I'm your comprehensive legal information resource for Indian laws and legal procedures.
                </div>

                <p class="mt-3"><strong>How I Can Assist You:</strong></p>
                <ul class="list-disc ml-5 space-y-2 mt-2">
                    <li>Explain constitutional provisions and fundamental rights</li>
                    <li>Detail criminal law procedures and rights</li>
                    <li>Guide through civil law processes and property matters</li>
                    <li>Explain digital and data protection laws</li>
                    <li>Provide consumer protection information</li>
                    <li>Help understand commercial and corporate laws</li>
                </ul>

                <p class="mt-3"><strong>Key Features:</strong></p>
                <div class="grid grid-cols-2 gap-2 mt-2">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-shield-alt text-legal-blue"></i>
                        <span class="text-xs">Verified Legal Information</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-gavel text-legal-blue"></i>
                        <span class="text-xs">Comprehensive Coverage</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-balance-scale text-legal-blue"></i>
                        <span class="text-xs">Updated Laws</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-book text-legal-blue"></i>
                        <span class="text-xs">Legal Resources</span>
                    </div>
                </div>

                <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p class="text-sm text-blue-800">
                        <strong>Note:</strong> I provide educational legal information, not legal advice. For specific legal matters, please consult a qualified lawyer.
                    </p>
                </div>
                `,
                sources: ["Legal Assistant System"],
                confidence: 1.0,
                suggested_questions: [
                    "What are my fundamental rights under the Constitution?",
                    "How does the criminal justice system work?",
                    "What is the DPDP Act?",
                    "What are my rights as a consumer?",
                    "How to file a civil suit?"
                ]
            };

            const welcomeMessage = chatHistory.querySelector('.bot-message-enhanced');
            if (welcomeMessage) {
                welcomeMessage.remove();
                addAIResponse(welcomeResponse);
            }
        }, 1000);
    });
