import { TileType } from '../../types';
import './Tile.css';

interface TileProps {
  type: TileType;
  x: number;
  y: number;
  onClick: () => void;
}

export default function Tile({ type, onClick }: TileProps) {
  return (
    <div className={`tile tile-${type}`} onClick={onClick}>
      {/* Desks */}
      {type === 'desk' && <div className="furniture desk-furniture" />}
      {type === 'desk-l' && <div className="furniture desk-l-furniture" />}
      {type === 'desk-r' && <div className="furniture desk-r-furniture" />}
      {type === 'workstation' && <div className="furniture workstation-furniture" />}

      {/* Computers & Monitors */}
      {type === 'computer' && (
        <div className="furniture computer-furniture">
          <div className="monitor" />
          <div className="screen" />
        </div>
      )}
      {type === 'laptop' && <div className="furniture laptop-furniture" />}
      {type === 'monitor-dual' && <div className="furniture monitor-dual-furniture" />}
      {type === 'desk-items' && <div className="furniture desk-items-furniture" />}

      {/* Role-specific monitors with screen content */}
      {type === 'monitor-ceo' && (
        <div className="furniture monitor-role-furniture monitor-ceo-furniture">
          <div className="screen-content screen-ceo" />
        </div>
      )}
      {type === 'monitor-cto' && (
        <div className="furniture monitor-role-furniture monitor-cto-furniture">
          <div className="screen-content screen-cto" />
        </div>
      )}
      {type === 'monitor-pm' && (
        <div className="furniture monitor-role-furniture monitor-pm-furniture">
          <div className="screen-content screen-pm" />
        </div>
      )}
      {type === 'monitor-dev' && (
        <div className="furniture monitor-role-furniture monitor-dev-furniture">
          <div className="screen-content screen-dev" />
        </div>
      )}
      {type === 'monitor-qa' && (
        <div className="furniture monitor-role-furniture monitor-qa-furniture">
          <div className="screen-content screen-qa" />
        </div>
      )}
      {type === 'monitor-design' && (
        <div className="furniture monitor-role-furniture monitor-design-furniture">
          <div className="screen-content screen-design" />
        </div>
      )}

      {/* Chairs */}
      {type === 'chair' && <div className="furniture chair-furniture" />}
      {type === 'chair-left' && <div className="furniture chair-left-furniture" />}
      {type === 'chair-right' && <div className="furniture chair-right-furniture" />}
      {type === 'chair-up' && <div className="furniture chair-up-furniture" />}
      {type === 'chair-down' && <div className="furniture chair-down-furniture" />}

      {/* Plants */}
      {type === 'plant' && (
        <div className="furniture plant-furniture">
          <div className="pot" />
          <div className="leaves" />
        </div>
      )}
      {type === 'plant-big' && (
        <div className="furniture plant-big-furniture">
          <div className="big-pot" />
          <div className="big-leaves" />
        </div>
      )}

      {/* Kitchen/Break area */}
      {type === 'coffee' && (
        <div className="furniture coffee-furniture">
          <div className="coffee-machine" />
        </div>
      )}
      {type === 'water-cooler' && <div className="furniture water-cooler-furniture" />}

      {/* Meeting room */}
      {type === 'whiteboard' && <div className="furniture whiteboard-furniture" />}
      {type === 'whiteboard-large' && <div className="furniture whiteboard-large-furniture" />}
      {type === 'meeting-table' && <div className="furniture table-furniture" />}

      {/* Windows & Doors */}
      {type === 'window' && <div className="furniture window-furniture" />}
      {type === 'window-large' && <div className="furniture window-large-furniture" />}
      {type === 'door' && <div className="furniture door-furniture" />}

      {/* Storage & Equipment */}
      {type === 'bookshelf' && <div className="furniture bookshelf-furniture" />}
      {type === 'printer' && <div className="furniture printer-furniture" />}
      {type === 'cabinet' && <div className="furniture cabinet-furniture" />}
      {type === 'server' && <div className="furniture server-furniture" />}
      {type === 'trash' && <div className="furniture trash-furniture" />}

      {/* Lighting & Decor */}
      {type === 'lamp' && <div className="furniture lamp-furniture" />}
      {type === 'floor-lamp' && <div className="furniture floor-lamp-furniture" />}
      {type === 'clock' && <div className="furniture clock-furniture" />}
      {type === 'wall-art' && <div className="furniture wall-art-furniture" />}

      {/* Lounge */}
      {type === 'couch' && <div className="furniture couch-furniture" />}
      {type === 'couch-left' && <div className="furniture couch-left-furniture" />}
      {type === 'couch-right' && <div className="furniture couch-right-furniture" />}
      {type === 'tv' && <div className="furniture tv-furniture" />}

      {/* Signs */}
      {type === 'sign-ceo' && <div className="furniture sign-furniture sign-ceo-furniture">CEO</div>}
      {type === 'sign-cto' && <div className="furniture sign-furniture sign-cto-furniture">CTO</div>}
      {type === 'sign-pm' && <div className="furniture sign-furniture sign-pm-furniture">PM</div>}
      {type === 'sign-dev' && <div className="furniture sign-furniture sign-dev-furniture">DEV</div>}
      {type === 'sign-qa' && <div className="furniture sign-furniture sign-qa-furniture">QA</div>}
      {type === 'sign-design' && <div className="furniture sign-furniture sign-design-furniture">DESIGN</div>}
      {type === 'sign-meeting' && <div className="furniture sign-furniture sign-meeting-furniture">MEETING</div>}
      {type === 'sign-lounge' && <div className="furniture sign-furniture sign-lounge-furniture">LOUNGE</div>}
    </div>
  );
}
