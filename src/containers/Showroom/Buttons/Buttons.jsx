import { Button } from 'components/shared';
import React from 'react';

const buttons = () => {
  return (
    <div className="showroom-buttons">
      <h1 className="right-line mb-4">Buttons and Links</h1>
      <div className="row">
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Primary button</label>
            <Button
              text="Continue"
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Secondary button</label>
            <Button
              color="secondary"
              text="Continue"
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Light button</label>
            <Button
              color="light"
              text="Continue"
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Outline primary button</label>
            <Button
              text="Continue"
              outline
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Outline secondary button</label>
            <Button
              color="secondary"
              text="Continue"
              outline
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Primary inverse button</label>
            <Button
              text="Continue"
              inverse
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Secondary inverse button</label>
            <Button
              color="secondary"
              text="Continue"
              inverse
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Large button</label>
            <Button
              text="Continue"
              size="lg"
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>No text transformation button</label>
            <Button
              text="Continue"
              uppercase={false}
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>No block button</label>
            <div>
              <Button
                text="Continue"
                block={false}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>With icon (in progress)</label>
            <div>
              <Button
                text="Continue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Primary link</label>
            <div>
              <Button
                type="link"
                text="Check this link"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Secondary link</label>
            <div>
              <Button
                type="link"
                text="Check this link"
                color="secondary"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="showroom-element">
            <label>Large link</label>
            <div>
              <Button
                type="link"
                text="Check this link"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default buttons;