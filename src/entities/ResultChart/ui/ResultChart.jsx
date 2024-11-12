import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import styles from "@/entities/ResultChart/style/ResultChart.module.scss";
import PropTypes from "prop-types";

const ResultChart = ({ results }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, []);

  const rawData = [
    {
      name: "Инициативность и\nсамостоятельность",
      value: results?.["Инициативность и самостоятельность"] || 0,
    },
    {
      name: "Эмпатия и  понимание\n пользователей",
      value: results?.["Эмпатия и понимание пользователей"] || 0,
    },
    {
      name: "Аналитическое мышление \nи работа с данными",
      value: results?.["Аналитическое мышление и работа с данными"] || 0,
    },
    {
      name: "Креативность и \nвизуальное мышление",
      value: results?.["Креативность и визуальное мышление"] || 0,
    },
    {
      name: "Планирование \n и организация",
      value: results?.["Планирование и организация"] || 0,
    },
    {
      name: "Точность \nи внимательность",
      value: results?.["Точность и внимательность"] || 0,
    },
  ].filter((item) => item.value > 0);

  const totalValue = rawData.reduce((acc, item) => acc + item.value, 0);

  const data = rawData
    .map((item) => ({
      name: item.name,
      value: totalValue ? Math.round((item.value / totalValue) * 100) : 0,
    }))
    .sort((a, b) => b.value - a.value);

  if (data.every((item) => item.value === 0)) {
    return <div>Нет данных для отображения результатов</div>;
  }

  const option = {
    tooltip: {
      trigger: "item",
      formatter: (params) => `${params.name}: ${params.value}%`,
      backgroundColor: "rgba(50, 50, 50, 0.8)",
      textStyle: { color: "#fff" },
    },
    radar: {
      indicator: data.map((item) => ({
        name: `${item.name} (${item.value}%)`, 
        max: 35,
      })),
      radius: isMobile ? "60%" : "75%",
      splitNumber: 1,
      shape: "polygon",
      splitArea: {
        areaStyle: {
          color: ["#fff"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "#4e73a1",
          width: 1,
        },
      },
      splitLine: {
        lineStyle: {
          color: "#4e73a1",
          width: 1,
        },
      },
      axisName: {
        color: "#333",
        fontSize: 18,
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: 3,
        padding: [2, 2],
        fontWeight: 400,
        textAlign:''
      },
    },
    series: [
      {
        name: "Результаты",
        type: "radar",
        data: [
          {
            value: data.map((item) => item.value),
            name: "Ваши результаты",
            areaStyle: {
              color: "#00cc44",
            },
            lineStyle: {
              color: "#00cc44",
              width: 2,
            },
            itemStyle: {
              color: "#00cc44",
              borderWidth: 0,
              width:0,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.ResultChart}>
      <div className="container">
        <div className={styles.ResultChart__content}>
          <h2>Ваши результаты:</h2>
          <div className={styles.ResultChart__result}>
            <ReactECharts
              className={styles.ResultChart__graphic}
              option={option}
              style={{
                height: isMobile ? "300px" : "500px", 
                textAlign:'center',
                maxWidth: "900px", 
                marginTop: '20px'
             }}              />
          </div>
          <div className={styles.ResultChart__details}>
            <h3>Подробные результаты:</h3>
            <ul>
              {data.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>: {item.value}%
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ResultChart.propTypes = {
  results: PropTypes.shape({
    "Инициативность и самостоятельность": PropTypes.number,
    "Эмпатия и понимание пользователей": PropTypes.number,
    "Аналитическое мышление и работа с данными": PropTypes.number,
    "Креативность и визуальное мышление": PropTypes.number,
    "Планирование и организация": PropTypes.number,
    "Точность и внимательность": PropTypes.number,
  }).isRequired,
};

export default ResultChart;
