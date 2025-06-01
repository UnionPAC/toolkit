import { useState } from 'react';
import { Modal } from '../lib/components/Modal';
import { RotatingWords } from '../lib/components/RotatingWords';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="m-2 flex flex-col gap-6">
      <h1 className="text-4xl font-bold">react toolkit</h1>
      <div>
        <h2 className="text-xl font-bold mb-2">Rotating Words</h2>
        <div>
          <RotatingWords
            staticTextBefore="I'm a"
            words={['Wizard', 'Climber', 'Designer']}
            staticTextAfter="and I love React."
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Modal</h2>
        <button 
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded cursor-pointer active:scale-95"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          wrapperClass="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
          <div className="bg-white p-6 rounded shadow">Modal content</div>
        </Modal>
      </div>
    </main>
  );
};

export default App;
