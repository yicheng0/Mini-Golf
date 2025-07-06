// 扩展现有的游戏功能，集成 Claude AI 助手
(function() {
  'use strict';

  // 游戏状态管理
  let gameState = {
    score: 0,
    currentHole: 1,
    shots: 0,
    difficulty: 'easy',
    lastShotPower: 0,
    lastShotAngle: 0,
    gameStarted: false
  };

  // 智能提示功能
  function getSmartTips() {
    const tips = [
      {
        condition: () => gameState.shots > 5,
        tip: "Try using less power for better control on this hole."
      },
      {
        condition: () => gameState.currentHole > 10,
        tip: "You're doing great! Focus on accuracy over power in the final holes."
      },
      {
        condition: () => gameState.score > gameState.currentHole * 2,
        tip: "Consider adjusting your strategy - aim for the center of the hole."
      },
      {
        condition: () => gameState.difficulty === 'hard',
        tip: "Hard mode requires patience. Take your time to line up each shot."
      }
    ];

    return tips.filter(tip => tip.condition()).map(tip => tip.tip);
  }

  // 游戏事件监听器
  function initializeGameTracking() {
    // 监听游戏开始
    document.addEventListener('click', function(event) {
      if (event.target.closest('.game-container')) {
        if (!gameState.gameStarted) {
          gameState.gameStarted = true;
          notifyGameStart();
        }
      }
    });

    // 模拟游戏状态更新（实际项目中应该从游戏引擎获取）
    setInterval(() => {
      if (gameState.gameStarted) {
        // 这里可以添加实际的游戏状态检测逻辑
        updateGameStateFromGame();
      }
    }, 2000);
  }

  function updateGameStateFromGame() {
    // 在实际项目中，这里应该从游戏引擎获取真实状态
    // 现在我们模拟一些状态变化
    const currentShots = Math.floor(Math.random() * 3) + 1;
    const currentHole = Math.floor(Math.random() * 18) + 1;
    
    if (currentShots !== gameState.shots || currentHole !== gameState.currentHole) {
      gameState.shots = currentShots;
      gameState.currentHole = currentHole;
      gameState.score += currentShots;
      
      // 通知主应用程序状态更新
      if (window.updateGameState) {
        window.updateGameState(gameState);
      }
      
      // 发送消息给主窗口
      window.postMessage({
        type: 'gameUpdate',
        gameState: gameState
      }, '*');
    }
  }

  function notifyGameStart() {
    console.log('🏌️ Golf game started! AI Coach is ready to help.');
    
    // 可以在这里添加欢迎消息或教程
    setTimeout(() => {
      if (window.claudeService && window.claudeService.isConfigured()) {
        showWelcomeMessage();
      }
    }, 2000);
  }

  function showWelcomeMessage() {
    // 创建欢迎提示
    const welcomeToast = document.createElement('div');
    welcomeToast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-size: 14px;
      max-width: 300px;
      animation: slideIn 0.3s ease-out;
    `;
    
    welcomeToast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>🤖</span>
        <span><strong>AI Golf Coach Ready!</strong><br>Click the AI button for tips and strategy advice.</span>
      </div>
    `;
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(welcomeToast);
    
    // 3秒后自动消失
    setTimeout(() => {
      welcomeToast.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => {
        welcomeToast.remove();
      }, 300);
    }, 3000);
  }

  // 添加游戏辅助功能
  function addGameHelpers() {
    const gameContainer = document.querySelector('.game-container');
    if (!gameContainer) return;

    // 添加快速提示按钮
    const tipsButton = document.createElement('button');
    tipsButton.innerHTML = '💡 Quick Tips';
    tipsButton.style.cssText = `
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 12px;
      cursor: pointer;
      z-index: 100;
      transition: all 0.2s ease;
    `;
  }
})(); 