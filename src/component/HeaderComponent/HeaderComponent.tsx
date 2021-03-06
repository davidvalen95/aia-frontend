import React, { FC } from 'react';
import styles from './HeaderComponent.module.scss';

interface HeaderComponentProps {}

const HeaderComponent: FC<HeaderComponentProps> = () => (



  <div className={styles.HeaderComponent} data-testid="HeaderComponent">

      <header className="p-3 mb-3 border-bottom">
          <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                      <li><a href="#" className="nav-link px-2 link-secondary">David Valentino React</a></li>
                  </ul>

                  <div className="dropdown text-end">
                      <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
                         data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle" width="32"
                               height="32" />
                      </a>
                      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                          <li><a className="dropdown-item" href="#">New project...</a></li>
                          <li><a className="dropdown-item" href="#">Settings</a></li>
                          <li><a className="dropdown-item" href="#">Profile</a></li>
                          <li>
                              <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Sign out</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>

  </div>
);

export default HeaderComponent;
