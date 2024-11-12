import React from "react";
import styles from "@/entities/TestReset/style/TestReset.module.scss";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt"
const TestResetButton = ({ isMobile, onReset }) => {
  return (
    <div>
      <div className={styles.TestReset}>
        <div className="container">
          <div className={styles.TestReset__content}>
            <h3>COMTEHNO</h3>
            <Button
              sx={{
                background: "#005B50",
                display: "flex",
                alignItems: "center",
              }}
              variant="contained"
              onClick={onReset}
              title={isMobile ? "Пройти тест" : ""}
            >{isMobile ? <RestartAltIcon/> : "Пройти тест заново"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResetButton;
