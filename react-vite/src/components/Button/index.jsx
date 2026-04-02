import classnames from "classnames";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./Button.module.css";

// Cách 1: Template Literals
// Cách 2: Template Literals
// Cách 3: Array Join
// Cách 4: Thư viện clsx
// Cách 5: Thư viện classnames
// Cách 6: Tailwind CSS

function Button() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    console.log("Trạng thái Active:", isActive);
  }, [isActive]);

  return (
    <div style={{ padding: "32px 40px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h1>Binding ClassName</h1>
        <button className={styles.btn} onClick={handleToggleActive}>
          {isActive ? "Active=false" : "Active=true"}
        </button>
      </div>

      <hr />

      {/* Cách 1 & 2 */}
      <div>
        <h3>Cách 1 & 2: Template Literals</h3>
        <button className={styles.btn}>Tĩnh (Cách 1)</button>
        <button className={`${styles.btn} ${isActive ? styles.active : ""}`}>
          Template Literal (Cách 2)
        </button>
      </div>

      <hr />

      {/* Cách 3 */}
      <div>
        <h3>Cách 3: Phương thức mảng join()</h3>
        <button className={[styles.btn, isActive ? styles.active : ""].join(" ")}>
          Array Join
        </button>
      </div>

      <hr />

      {/* Cách 4 & 5 */}
      <div>
        <h3>Cách 4 & 5: Thư viện clsx / classnames</h3>
        <button className={clsx(styles.btn, { [styles.active]: isActive })}>
          Thư viện CLSX
        </button>
        <button className={classnames(styles.btn, { [styles.active]: isActive }, ['extra-class'])}>
          Thư viện Classnames
        </button>
      </div>

      <hr />

      {/* Cách 6 */}
      <div>
        <h3>Cách 6: Tailwind CSS</h3>
        <button className="bg-blue-500 text-black px-4 py-2 rounded mr-2">
          Class tĩnh
        </button>
        <button className={`px-4 py-2 rounded text-black mr-2 ${isActive ? 'bg-red-500' : 'bg-blue-500'}`}>
          Động với Literal
        </button>
        <button className={clsx('px-4 py-2 rounded text-black', isActive ? 'bg-red-500' : 'bg-blue-500')}>
          Tailwind + CLSX
        </button>
      </div>
    </div>
  );
}

export default Button;
