// Hàm việt hóa các từ tiếng Anh (nhất là thuật ngữ IT) để TTS đọc chuẩn hơn
export const fixEnglishPronunciation = (text) => {
  let t = text;
  const dict = {
    '\\bHashMap\\b': 'hát máp',
    '\\bTreeMap\\b': 'tri máp',
    '\\bHashSet\\b': 'hát sét',
    '\\bStringBuilder\\b': 'xờ-trinh biu-đờ',
    '\\bString\\b': 'xờ-trinh',
    '\\bArrayList\\b': 'a-rây lít',
    '\\bLinkedList\\b': 'lin-kịt lít',
    '\\bArrays?\\b': 'a-rây',
    '\\bList\\b': 'lít',
    '\\bStack\\b': 'xờ-tắc',
    '\\bQueue\\b': 'kiu',
    '\\bPriorityQueue\\b': 'pờ-rai-o-ri-ti kiu',
    '\\bHeap\\b': 'híp',
    '\\bMap\\b': 'máp',
    '\\bSet\\b': 'sét',
    '\\bOOP\\b': 'Ô Ô Pi',
    '\\bboolean\\b': 'bu-liền',
    '\\bbyte\\b': 'bai',
    '\\bdouble\\b': 'đắp-bồ',
    '\\bfloat\\b': 'phờ-lót',
    '\\bchar\\b': 'cha',
    '\\bObject\\b': 'óp-giếch',
    '\\bClasses\\b': 'cờ-lát-xịt',
    '\\bClass\\b': 'cờ-lát',
    'O\\(1\\)': 'Ô Một',
    'O\\(N\\)': 'Ô Nờ',
    'O\\(log N\\)': 'Ô Lóc Nờ',
    '\\bStream\\b': 'xờ-trim',
    '\\bFilter\\b': 'phiu-tờ',
    '\\bReduce\\b': 'rì-điu',
    '\\bThread\\b': 'th-rét',
    '\\bRunnable\\b': 'răn-nây-bồ',
    '\\bInterface\\b': 'in-tơ-phây',
    '\\bCollection\\b': 'cô-lếch-sần',
    '\\bCode\\b': 'cốt',
    '\\bImmutable\\b': 'im-miu-tây-bồ',
    '\\bMutable\\b': 'miu-tây-bồ',
    '\\bconcatenation\\b': 'con-cát-tê-nây-sần',
    '\\bPalindrome\\b': 'pa-lin-đờ-rôm',
    '\\bAnagrams?\\b': 'a-na-gờ-ram',
    '\\bappend\\b': 'áp-pen',
    '\\binsert\\b': 'in-sợt',
    '\\bdeleteCharAt\\b': 'đi-lít-cha-át',
    '\\breverse\\b': 'ri-vợt',
    '\\btoString\\b': 'tu xờ-trinh',
    '\\bamortized\\b': 'a-mô-tai',
    '\\bCompression\\b': 'com-p-rét-sần',
    '\\bDecode\\b': 'đi-cốt',
    '\\bFixed Size\\b': 'phích xai',
    '\\bTwo Pointers\\b': 'tu-poi-tờ',
    '\\bSliding Window\\b': 'sờ-lai-đing uynh-đâu',
    '\\bDynamic\\b': 'đai-na-mích',
    '\\bindex\\b': 'in-đếch',
    '\\bLRU Cache\\b': 'eo-a-diu-cát-sờ',
    '\\bDoubly Linked\\b': 'đắp-bờ-li linh-kịt',
    '\\bLIFO\\b': 'lai-phô',
    '\\bFIFO\\b': 'phai-phô',
    '\\bDFS\\b': 'đi-ép-ét',
    '\\bBFS\\b': 'bi-ép-ét',
    '\\bMonotonic\\b': 'mô-nô-tô-níc',
    '\\bLevel Order Traversal\\b': 'le-vồ o-đờ tra-vơ-sồ',
    '\\bMin\\b': 'min',
    '\\bMax\\b': 'mác',
    '\\bTop K\\b': 'tóp cây',
    '\\bKey-Value\\b': 'ki va-liu',
    '\\bKey\\b': 'ki',
    '\\bValue\\b': 'va-liu',
    '\\bTwo Sum\\b': 'tu săm',
    '\\bfloorKey\\b': 'ph-lo-ki',
    '\\bceilingKey\\b': 'xi-lin-ki',
    '\\bRed-Black Tree\\b': 'rét-bờ-lắc tri',
    '\\bUnique\\b': 'diu-níc',
    '\\bPredicate\\b': 'p-rê-đi-cệt',
    '\\bFunction\\b': 'phăng-sần',
    '\\bBinaryOperator\\b': 'bai-na-ri o-pê-rây-tờ',
    '\\bTerminal\\b': 'tơ-mi-nồ',
    '\\bAggregation\\b': 'a-gờ-rê-gây-sần',
    '\\bReporting\\b': 'ri-pọt-tinh',
    '\\bConcurrency\\b': 'con-cơ-rần-xi',
    '\\bdeadlock\\b': 'đét-lóc',
    '\\brace condition\\b': 'rây con-đi-sần',
    '\\bthread pool\\b': 'th-rét-pun',
    '\\boverflow\\b': 'ô-vờ-ph-lâu',
    '\\bBit Manipulation\\b': 'bít ma-ni-pu-lây-sần',
    '\\bPrefix\\b': 'p-ri-phích',
    '\\bHex\\b': 'héc',
    '\\bOctal\\b': 'óc-tồ',
    '\\bBinary\\b': 'bai-na-ri',
    '\\bDecimal\\b': 'đe-xi-mồ',
    '\\bEncapsulation\\b': 'en-cáp-su-lây-sần',
    '\\bInheritance\\b': 'in-he-ri-tần',
    '\\bPolymorphism\\b': 'pô-li-mo-phi-dầm',
    '\\bAbstraction\\b': 'áp-x-trắc-sần',
    '\\bSystem Design\\b': 'xít-tầm đi-zai',
    '\\bAbstract\\b': 'áp-x-trắc',
    '\\bOverloading\\b': 'ô-vờ-lốt-đinh',
    '\\bOverriding\\b': 'ô-vờ-rai-đinh'
  };
  
  for (const [key, val] of Object.entries(dict)) {
    t = t.replace(new RegExp(key, 'gi'), val);
  }
  return t;
};

export const playTTS = (topic, setIsSpeaking) => {
  if (!('speechSynthesis' in window)) {
    alert("Trình duyệt của bạn không hỗ trợ tính năng đọc văn bản.");
    return;
  }

  const rawText = `
    Chủ đề: ${topic.title}. 
    Phần mô tả: ${topic.description}. 
    ${topic.interviewSignals ? `Dấu hiệu nhận biết khi phỏng vấn: ${topic.interviewSignals}.` : ''}
    ${topic.practiceProblems ? `Các bài tập cần luyện tập: ${topic.practiceProblems}.` : ''}
    ${topic.memoryTrick ? `Mẹo nhớ nhanh: ${topic.memoryTrick.replace('🧠', '')}` : ''}
  `;

  const textToSpeak = fixEnglishPronunciation(rawText);

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'vi-VN'; // Đọc tiếng Việt
  
  const voices = window.speechSynthesis.getVoices();
  const viVoices = voices.filter(v => v.lang.includes('vi'));
  
  if (viVoices.length > 0) {
    const hoaiMyVoice = viVoices.find(v => v.name.includes('HoaiMy') || v.name.includes('Hoài My'));
    const premiumVoice = viVoices.find(v => 
      v.name.toLowerCase().includes('natural') || 
      v.name.includes('Online') ||
      v.name.includes('Google')
    );
    utterance.voice = hoaiMyVoice || premiumVoice || viVoices[0];
  }

  utterance.rate = 0.95;     
  utterance.onend = () => setIsSpeaking(false);

  setIsSpeaking(true);
  window.speechSynthesis.speak(utterance);
};

export const stopTTS = (setIsSpeaking) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (setIsSpeaking) {
    setIsSpeaking(false);
  }
};
