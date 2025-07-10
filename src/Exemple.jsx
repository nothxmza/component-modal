import { useState } from "react";
import { Modal } from "./Modal";

export const Exemple = () => {
	  const [isOpen, setIsOpen] = useState(false);
	  return (
		<>
			<Modal open={isOpen} onClose={() => setIsOpen(false)} style={{ width: '400px', height: '300px' }}>
				<p>test modal</p>
			</Modal>
			<button onClick={() => setIsOpen(true)}>Open modal</button>
		</>
  );
}