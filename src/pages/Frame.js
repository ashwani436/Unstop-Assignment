import { useState, useCallback } from "react";
import Frame1 from "../components/Frame1";
import PortalPopup from "../components/PortalPopup";
import styles from "./Frame.module.css";
const Frame = () => {
  const [isFrame2Open, setFrame2Open] = useState(false);

  const onFrameContainer3Click = useCallback(() => {
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <div className={styles.frameParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.assessmentParent}>
                <div className={styles.assessment}>Assessment</div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/vector-298.svg"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.myAssessmentsWrapper}>
                    <div className={styles.myAssessments}>My Assessments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent1}>
                <div className={styles.assessmentsOverviewParent}>
                  <div className={styles.assessmentsOverview}>
                    Assessments Overview
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.totalAssessmentParent}>
                      <div className={styles.assessment}>Total Assessment</div>
                      <div className={styles.frameParent3}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000009100.svg"
                        />
                        <b className={styles.b}>34</b>
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-251.svg"
                    />
                    <div className={styles.candidatesParent}>
                      <div className={styles.assessment}>Candidates</div>
                      <div className={styles.frameParent4}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000009353.svg"
                        />
                        <div className={styles.frameParent5}>
                          <div className={styles.parent}>
                            <b className={styles.b}>11,145</b>
                            <div className={styles.div}>+89</div>
                          </div>
                          <div className={styles.totalCandidate}>
                            Total Candidate
                          </div>
                        </div>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="/vector-250.svg"
                        />
                        <div className={styles.frameParent5}>
                          <div className={styles.parent}>
                            <b className={styles.b}>1,14</b>
                            <div className={styles.div}>+89</div>
                          </div>
                          <div className={styles.totalCandidate}>
                            Who Attamped
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-251.svg"
                    />
                    <div className={styles.candidatesSourceParent}>
                      <div className={styles.assessment}>Candidates Source</div>
                      <div className={styles.frameParent4}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-1000005832.svg"
                        />
                        <div className={styles.frameParent5}>
                          <div className={styles.parent}>
                            <b className={styles.b}>11,000</b>
                            <div className={styles.div}>+89</div>
                          </div>
                          <div className={styles.totalCandidate}>E-mail</div>
                        </div>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="/vector-250.svg"
                        />
                        <div className={styles.frameParent5}>
                          <div className={styles.parent}>
                            <b className={styles.b}>145</b>
                            <div className={styles.div}>+89</div>
                          </div>
                          <div className={styles.totalCandidate}>
                            Social Share
                          </div>
                        </div>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="/vector-250.svg"
                        />
                        <div className={styles.frameParent5}>
                          <div className={styles.parent}>
                            <b className={styles.b}>145</b>
                            <div className={styles.div}>+89</div>
                          </div>
                          <div className={styles.totalCandidate}>
                            Unique Link
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-251.svg"
                    />
                    <div className={styles.totalPurposeParent}>
                      <div className={styles.assessment}>Total Purpose</div>
                      <div className={styles.frameParent3}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-10000091001.svg"
                        />
                        <b className={styles.b}>11</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.assessmentsOverviewParent}>
                  <div className={styles.myAssessmentParent}>
                    <div className={styles.assessmentsOverview}>
                      My Assessment
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameChild9} />
                    </div>
                  </div>
                  <div className={styles.frameParent13}>
                    <div className={styles.frameParent14}>
                      <div
                        className={styles.frameParent15}
                        onClick={openFrame2}
                      >
                        <div className={styles.frameParent16}>
                          <div className={styles.addWrapper}>
                            <img
                              className={styles.addIcon}
                              alt=""
                              src="/add.svg"
                            />
                          </div>
                          <div className={styles.newAssessment}>
                            New Assessment
                          </div>
                        </div>
                        <div className={styles.fromHereYou}>
                          From here you can add questions of multiple types like
                          MCQs, subjective (text or paragraph)!
                        </div>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <img
                              className={styles.frameChild10}
                              alt=""
                              src="/frame-1000008703.svg"
                            />
                            <div className={styles.mathAssessmentParent}>
                              <div className={styles.assessmentsOverview}>
                                Math Assessment
                              </div>
                              <div className={styles.jobParent}>
                                <div className={styles.job}>Job</div>
                                <img
                                  className={styles.frameChild11}
                                  alt=""
                                  src="/vector-333.svg"
                                />
                                <div className={styles.calendarTodayParent}>
                                  <img
                                    className={styles.calendarTodayIcon}
                                    alt=""
                                    src="/calendar-today.svg"
                                  />
                                  <div className={styles.newAssessment}>
                                    20 Apr 2023
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.dotWrapper}>
                            <img
                              className={styles.dotIcon}
                              alt=""
                              src="/3-dot.svg"
                            />
                          </div>
                        </div>
                        <img
                          className={styles.frameChild12}
                          alt=""
                          src="/vector-332.svg"
                        />
                        <div className={styles.frameParent20}>
                          <div className={styles.frameParent21}>
                            <div className={styles.parent3}>
                              <div className={styles.assessment}>00</div>
                              <div className={styles.duration}>Duration</div>
                            </div>
                            <div className={styles.parent3}>
                              <div className={styles.assessment}>00</div>
                              <div className={styles.duration}>Questions</div>
                            </div>
                          </div>
                          <div className={styles.frameParent22}>
                            <div className={styles.linkParent}>
                              <img
                                className={styles.linkIcon}
                                alt=""
                                src="/link.svg"
                              />
                              <div className={styles.assessmentsOverview}>
                                Share
                              </div>
                            </div>
                            <div className={styles.frameWrapper4}>
                              <div className={styles.lpWrapper}>
                                <b className={styles.lp}>LP</b>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameChild13} />
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <img
                              className={styles.frameChild10}
                              alt=""
                              src="/frame-1000008703.svg"
                            />
                            <div className={styles.mathAssessmentParent}>
                              <div className={styles.assessmentsOverview}>
                                Math Assessment
                              </div>
                              <div className={styles.jobParent}>
                                <div className={styles.job}>Job</div>
                                <img
                                  className={styles.frameChild11}
                                  alt=""
                                  src="/vector-333.svg"
                                />
                                <div className={styles.calendarTodayParent}>
                                  <img
                                    className={styles.calendarTodayIcon}
                                    alt=""
                                    src="/calendar-today1.svg"
                                  />
                                  <div className={styles.newAssessment}>
                                    20 Apr 2023
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.dotWrapper}>
                            <img
                              className={styles.dotIcon}
                              alt=""
                              src="/3-dot.svg"
                            />
                          </div>
                        </div>
                        <img
                          className={styles.frameChild12}
                          alt=""
                          src="/vector-332.svg"
                        />
                        <div className={styles.frameParent20}>
                          <div className={styles.frameParent21}>
                            <div className={styles.parent3}>
                              <div className={styles.assessment}>00</div>
                              <div className={styles.duration}>Duration</div>
                            </div>
                            <div className={styles.parent3}>
                              <div className={styles.assessment}>00</div>
                              <div className={styles.duration}>Questions</div>
                            </div>
                          </div>
                          <div className={styles.frameParent22}>
                            <div className={styles.linkParent}>
                              <img
                                className={styles.linkIcon}
                                alt=""
                                src="/link1.svg"
                              />
                              <div className={styles.assessmentsOverview}>
                                Share
                              </div>
                            </div>
                            <div className={styles.frameWrapper4}>
                              <div className={styles.frameParent29}>
                                <div className={styles.lpWrapper}>
                                  <b className={styles.lp}>LP</b>
                                </div>
                                <div className={styles.lpFrame}>
                                  <b className={styles.lp}>LP</b>
                                </div>
                                <div className={styles.lpWrapper1}>
                                  <b className={styles.lp}>LP</b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameChild13} />
                      </div>
                    </div>
                    <div className={styles.frameChild18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className={styles.frameA}>
          <div className={styles.frameParent30}>
            <div className={styles.frameParent31}>
              <div className={styles.dashboardParent}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/dashboard.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.noteAltParent}>
                <img
                  className={styles.noteAltIcon}
                  alt=""
                  src="/note-alt.svg"
                />
                <div className={styles.dashboard}>Assessment</div>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.quizParent}>
                <img className={styles.dotIcon} alt="" src="/quiz.svg" />
                <div className={styles.assessmentsOverview}>My Library</div>
              </div>
              <div className={styles.frameChild20} />
              <div className={styles.frameChild20} />
              <div className={styles.frameChild20} />
              <div className={styles.billAndPlanLineWrapper}>
                <img className={styles.linkIcon} alt="" src="/vector.svg" />
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild23}
                alt=""
                src="/vector-267.svg"
              />
              <div className={styles.frameParent32}>
                <div className={styles.adminWrapper}>
                  <div className={styles.newAssessment}>Admin</div>
                </div>
                <div className={styles.adminMedsParent}>
                  <img
                    className={styles.dotIcon}
                    alt=""
                    src="/admin-meds.svg"
                  />
                  <div className={styles.assessmentsOverview}>
                    <p className={styles.round}>Round</p>
                    <p className={styles.round}>Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Frame1 onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame;
