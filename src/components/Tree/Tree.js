import React, { useState, useEffect } from "react";
import "./Tree.css";
import MapData from "../../data/MapData";
import LinkIcon from "../../assets/link.svg";
function Tree(props) {
  //   const [tags, setTags] = useState([]);
  //   const [max,setMax]=useState([props.max]);
  //   const [mytags, setMytags] = useState(props.myTags==undefined?null:props.myTags);
  //   const [edit, setEdit] = useState(props.edit);
  useEffect(() => {}, []);

  return (
    <div className="Tree">
      <ul>
        {MapData.map((item, index) => (
          <li key={index}>
            <div className="TreeNode">
              <img src={item.icon} className="TreeIcon" />
              {item.link != "" ? (
                <a href={item.link} target="_blank">
                  <div className="TreeTitle">{item.title}</div>
                  <div className="TreeLink"></div>
                </a>
              ) : (
                <div className="TreeTitle">{item.title}</div>
              )}
            </div>

            <ul>
              {item.sub.map.length != 0 ? (
                item.sub.map((item2, index2) => (
                  <li key={index2}>
                    <div className="TreeNode">
                      <img src={item2.icon} className="TreeIcon" />
                      {item2.link != "" ? (
                        <a href={item2.link} target="_blank">
                          <div className="TreeTitle">{item2.title}</div>
                          <div className="TreeLink"></div>
                        </a>
                      ) : (
                        <div className="TreeTitle">{item2.title}</div>
                      )}
                    </div>
                    <ul>
                      {item2.sub.map.length != 0 ? (
                        item2.sub.map((item3, index3) => (
                          <li key={index3}>
                            <div className="TreeNode">
                              <img src={item3.icon} className="TreeIcon" />
                              {item3.link != "" ? (
                                <a href={item3.link} target="_blank">
                                  <div className="TreeTitle">{item3.title}</div>
                                  <div className="TreeLink"></div>
                                </a>
                              ) : (
                                <div className="TreeTitle">{item3.title}</div>
                              )}
                            </div>
                            <ul>
                              {item3.sub.length != 0 ? (
                                item3.sub.map((item4, index4) => (
                                  <li key={index4}>
                                    <div className="TreeNode">
                                      <img
                                        src={item4.icon}
                                        className="TreeIcon"
                                      />
                                      {item4.link != "" ? (
                                        <a href={item4.link} target="_blank">
                                          <div className="TreeTitle">
                                            {item4.title}
                                          </div>
                                          <div className="TreeLink"></div>
                                        </a>
                                      ) : (
                                        <div className="TreeTitle">
                                          {item4.title}
                                        </div>
                                      )}
                                    </div>
                                    <ul>
                                      {item4.sub.map.length != 0 ? (
                                        item4.sub.map((item5, index5) => (
                                          <li key={index5}>
                                            <div className="TreeNode">
                                              <img
                                                src={item5.icon}
                                                className="TreeIcon"
                                              />
                                              {item5.link != "" ? (
                                                <a
                                                  href={item5.link}
                                                  target="_blank"
                                                >
                                                  <div className="TreeTitle">
                                                    {item5.title}
                                                  </div>
                                                  <div className="TreeLink"></div>
                                                </a>
                                              ) : (
                                                <div className="TreeTitle">
                                                  {item5.title}
                                                </div>
                                              )}
                                            </div>
                                          </li>
                                        ))
                                      ) : (
                                        <div></div>
                                      )}
                                      <li></li>
                                    </ul>
                                  </li>
                                ))
                              ) : (
                                <div></div>
                              )}
                            </ul>
                          </li>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </ul>
                  </li>
                ))
              ) : (
                <div></div>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tree;
