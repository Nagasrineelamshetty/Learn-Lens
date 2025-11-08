// import React from 'react';
// import { BookOpen, Sparkles, FileText, Hash, Target } from 'lucide-react';

// interface SummaryDisplayProps {
//   summary: string;
//   topics?: string[];
//   wordCount?: number;
//   pageCount?: number;
//   questionCount: number;
//   onStartQuiz: () => void;
// }

// export const SummaryDisplay: React.FC<SummaryDisplayProps> = ({
//   summary,
//   topics = [],
//   wordCount = 0,
//   pageCount = 0,
//   questionCount,
//   onStartQuiz,
// }) => {
//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Document Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
//           <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
//           <div className="text-2xl font-bold text-gray-800">{pageCount}</div>
//           <div className="text-sm text-gray-600">Pages</div>
//         </div>
//         <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
//           <Hash className="w-6 h-6 text-green-600 mx-auto mb-2" />
//           <div className="text-2xl font-bold text-gray-800">{wordCount.toLocaleString()}</div>
//           <div className="text-sm text-gray-600">Words</div>
//         </div>
//         <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
//           <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
//           <div className="text-2xl font-bold text-gray-800">{topics.length}</div>
//           <div className="text-sm text-gray-600">Topics</div>
//         </div>
//         <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
//           <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-2" />
//           <div className="text-2xl font-bold text-gray-800">{questionCount}</div>
//           <div className="text-sm text-gray-600">Questions</div>
//         </div>
//       </div>

//       {/* Topics Overview */}
//       {topics.length > 0 && (
//         <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
//           <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
//             <Target className="w-5 h-5 text-purple-600" />
//             <span>Key Topics Identified</span>
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {topics.map((topic, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
//               >
//                 {topic}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Summary Section */}
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
//         <div className="flex items-center space-x-3 mb-6">
//           <div className="p-3 bg-blue-100 rounded-full">
//             <BookOpen className="w-6 h-6 text-blue-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">Comprehensive Summary</h2>
//         </div>
        
//         <div className="prose max-w-none">
//           <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap bg-white/50 rounded-xl p-6 border border-blue-200">
//             {summary}
//           </div>
//         </div>
//       </div>

//       {/* Quiz CTA */}
//       <div className="text-center">
//         <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <Sparkles className="w-6 h-6 text-amber-500" />
//             <h3 className="text-xl font-semibold text-gray-800">
//               Ready for Your Personalized Quiz?
//             </h3>
//           </div>
//           <p className="text-gray-600 mb-6">
//             Test your understanding with {questionCount} carefully crafted questions covering all major topics
//           </p>
//           <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-4 mb-6">
//             <p className="text-sm text-gray-700">
//               <strong>Quiz Features:</strong> Topic-based questions • Detailed explanations • Performance analytics • Adaptive difficulty
//             </p>
//           </div>
//           <button
//             onClick={onStartQuiz}
//             className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-xl"
//           >
//             Start {questionCount}-Question Challenge
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import {
  BookOpen,
  Sparkles,
  FileText,
  Hash,
  Target,
  Volume2,
  Pause,
  Play,
  VolumeX,
} from 'lucide-react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface SummaryDisplayProps {
  summary: string;
  topics?: string[];
  wordCount?: number;
  pageCount?: number;
  questionCount: number;
  onStartQuiz: () => void;
}

export const SummaryDisplay: React.FC<SummaryDisplayProps> = ({
  summary,
  topics = [],
  wordCount = 0,
  pageCount = 0,
  questionCount,
  onStartQuiz,
}) => {
  const { isSpeaking, isPaused, speak, pause, resume, cancel } = useSpeechSynthesis();

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Document Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
          <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{pageCount}</div>
          <div className="text-sm text-gray-600">Pages</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
          <Hash className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{wordCount.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Words</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
          <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{topics.length}</div>
          <div className="text-sm text-gray-600">Topics</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
          <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{questionCount}</div>
          <div className="text-sm text-gray-600">Questions</div>
        </div>
      </div>

      {/* Topics Overview */}
      {topics.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <Target className="w-5 h-5 text-purple-600" />
            <span>Key Topics Identified</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Summary Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Comprehensive Summary</h2>
          </div>

          {/* Voice Controls */}
          <div className="flex items-center space-x-2">
            {!isSpeaking && (
              <button
                onClick={() => speak(summary)}
                className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                title="Play"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
            {isSpeaking && !isPaused && (
              <button
                onClick={pause}
                className="p-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white"
                title="Pause"
              >
                <Pause className="w-5 h-5" />
              </button>
            )}
            {isSpeaking && isPaused && (
              <button
                onClick={resume}
                className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
                title="Resume"
              >
                <Play className="w-5 h-5" />
              </button>
            )}
            {isSpeaking && (
              <button
                onClick={cancel}
                className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
                title="Stop"
              >
                <VolumeX className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap bg-white/50 rounded-xl p-6 border border-blue-200">
            {summary}
          </div>
        </div>
      </div>

      {/* Quiz CTA */}
      <div className="text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <h3 className="text-xl font-semibold text-gray-800">
              Ready for Your Personalized Quiz?
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            Test your understanding with {questionCount} carefully crafted questions covering all major topics
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Quiz Features:</strong> Topic-based questions • Detailed explanations • Performance analytics • Adaptive difficulty
            </p>
          </div>
          <button
            onClick={onStartQuiz}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start Quiz Challenge
          </button>
        </div>
      </div>
    </div>
  );
};
